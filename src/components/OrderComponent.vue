<template>
  <div class="flex flex-col-reverse md:flex-row gap-10 justify-between p-6">
    <div class="order_form md:w-1/3 mx-auto mb-6">
      <form action="#" class="" @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="">
            <span class="text-custom-main">{{ $t('fullname').split(' ')[0] }}</span>
            {{ $t('fullname').split(' ')[1] }}</label
          >
          <input
            type="text"
            class="outline-none w-full p-2 shadow-sm border rounded-md"
            v-model="username"
          />
        </div>
        <div class="mb-3">
          <label for=""
            ><span class="text-custom-main">{{ $t('number').split(' ')[0] }}</span>
            {{ $t('number').split(' ')[1] }}</label
          >
          <input
            type="number"
            class="outline-none w-full p-2 shadow-sm border rounded-md"
            v-model="number"
            placeholder="+998 90-000-00-00"
          />
        </div>
        <div class="flex gap-4 mb-3 w-full">
          <div class="plan_select gap-1 flex flex-col">
            <label>
              <span class="text-custom-main">{{ $t('project_type').split(' ')[0] }}</span>
              {{ $t('project_type').split(' ')[1] }}
            </label>
            <select
              class="py-1 px-2 rounded-md border border-custom-main outline-none"
              v-model="plan_select"
              @change="updateTarifs"
            >
              <option :value="item" v-for="item in prices" :key="item.id">
                {{ item.title }}
              </option>
            </select>
          </div>
          <div class="plan_select w-full gap-1 flex flex-col">
            <label
              ><span class="text-custom-main">{{ $t('tariff_type').split(' ')[0] }}</span>
              {{ $t('tariff_type').split(' ')[1] }}</label
            >
            <select
              class="py-1 px-2 w-full rounded-md border border-custom-main outline-none"
              v-model="tarif_select"
            >
              <option :value="tarif.id" v-for="tarif in filteredTarifs" :key="tarif.id">
                {{ tarif.title }}
              </option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label for="area" class="mb-4 text-md text-custom-main">
            <span class="text-custom-main mr-1">
              {{ $t('order_info').split(' ')[0] }}
            </span>

            <span>
              {{ $t('order_info').split(' ').slice(1).join(' ') }}
            </span>
          </label>
          <textarea
            id="area"
            v-model="message"
            class="outline-none resize-none w-full py-4 px-2 shadow-sm border h-[140px] rounded-md"
          ></textarea>
        </div>
        <div class="mt-4 text-end">
          <button
            class="hover:bg-white text-white mr-4 sm:mr-0 bg-custom-main hover:text-custom-main py-1 px-2 rounded-md border border-custom-main transition-all delay-75 md:w-auto w-full"
          >
            {{ $t('order_btn') }}
          </button>
        </div>
      </form>
    </div>
    <div class="community_privilage mx-auto md:w-1/2">
      <div class="community_control flex-wrap md:flex-nowrap flex items-center gap-4">
        <button
          @click="handleFilter('seo')"
          :class="{ 'text-custom-main border border-custom-main': filter === 'seo' }"
          class="py-1 px-4 rounded-md"
        >
          SEO
        </button>
        <button
          @click="handleFilter('site')"
          :class="{ 'text-custom-main border border-custom-main': filter === 'site' }"
          class="py-1 px-4 rounded-md"
        >
          Web Sayt
        </button>
        <button
          @click="handleFilter('crm')"
          :class="{ 'text-custom-main border border-custom-main': filter === 'crm' }"
          class="py-1 px-4 rounded-md"
        >
          CRM Tizimi
        </button>
        <button
          @click="handleFilter('mark')"
          :class="{ 'text-custom-main border border-custom-main': filter === 'mark' }"
          class="py-1 px-4 rounded-md"
        >
          Onlayn Do'kon
        </button>
      </div>
      <div class="community_content">
        <div
          class="price_cards flex-wrap md:flex-nowrap gap-4 flex justify-between mt-10"
          v-for="item in filteredPrices"
          :key="item.id"
        >
          <div
            class="price_card w-full rounded-md md:w-1/3 border p-2 border-custom-main"
            v-for="obj in item.tariffs"
            :key="obj.id"
          >
            <h1 class="text-center h-[60px]">{{ obj.title }}</h1>
            <p>{{ obj.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFetch } from './useFetch'

export default {
  data() {
    return {
      username: '',
      number: '',
      message: '',
      filter: 'seo',
      plan_select: 'seo',
      tarif_select: 'seo',
      prices: [],
      apiUrl: 'https://sunnatakbarov.pythonanywhere.com/api/v1/project_type/list/'
    }
  },
  computed: {
    filteredPrices() {
      return this.prices.filter((item) => item.value === this.filter)
    },
    filteredTarifs() {
      const selectedPlan = this.prices.find((item) => item.value === this.plan_select.value)
      return selectedPlan ? selectedPlan.tariffs : []
    }
  },
  methods: {
    handleFilter(category) {
      this.filter = category
    },
    updateTarifs() {
      this.tarif_select = ''
    },
    async handleSubmit() {
      const orderData = {
        fullname: this.username,
        phone: this.number,
        project_type: this.plan_select.id,
        tariff: this.tarif_select,
        message: this.message
      }
      try {
        if (
          orderData.fullname != '' &&
          orderData.phone != '' &&
          orderData.project_type != '' &&
          orderData.tariff != '' &&
          orderData.message != ''
        ) {
          const response = await fetch(
            'https://sunnatakbarov.pythonanywhere.com/api/v1/order/create/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(orderData)
            }
          )
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
          }
          const result = await response.json()
          alert('Order will be replacing!')
          this.resetForm()
        } else {
          alert('fill all the gaps')
        }
      } catch (error) {
        console.error('Error submitting order:', error)
      }
    },
    resetForm() {
      this.username = ''
      this.number = ''
      this.message = ''
      this.plan_select = ''
      this.tarif_select = ''
    },
    async getData() {
      this.prices = await useFetch(this.apiUrl)
      console.log(this.prices)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped></style>
