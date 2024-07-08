<template>
  <div class="flex flex-col-reverse md:flex-row gap-6 justify-between p-6">
    <div class="order_form md:w-2/4 mb-6">
      <form action="#" @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for=""> <span class="text-custom-main">Ism</span> Familia </label>
          <input
            type="text"
            class="outline-none w-full py-4 px-2 shadow-xl border rounded-md"
            v-model="username"
          />
        </div>
        <div class="mb-3">
          <label for=""> <span class="text-custom-main">Telefon</span> raqam </label>
          <input
            type="number"
            class="outline-none w-full py-4 px-2 shadow-xl border rounded-md"
            v-model="number"
          />
        </div>
        <div class="flex gap-4 mb-3 w-full">
          <div class="plan_select gap-1 flex flex-col">
            <label> <span class="text-custom-main">Loyiha</span> Tanglang </label>
            <select
              class="py-1 px-2 rounded-md border border-custom-main outline-none"
              v-model="plan_select"
              @change="updateTarifs"
            >
              <option :value="item.value" v-for="item in store.prices">{{ item.title }}</option>
            </select>
          </div>
          <div class="plan_select w-full gap-1 flex flex-col">
            <label> <span class="text-custom-main">Tarifni</span> Tanglang </label>
            <select
              class="py-1 px-2 w-full rounded-md border border-custom-main outline-none"
              v-model="tarif_select"
            >
              <option :value="date.val" v-for="date in filteredTarifs">{{ date.title }}</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label for="area" class="mb-4 text-md text-custom-main">
            Buyurtma <span class="text-black">haqida ma'lumot</span>
          </label>
          <textarea
            draggable="false"
            id="area"
            v-model="message"
            class="outline-none w-full py-4 px-2 shadow-xl border h-[100px] rounded-md"
          ></textarea>
        </div>
        <div class="mt-4 text-end">
          <button
            class="hover:bg-white text-white mr-4 sm:mr-0 bg-custom-main hover:text-custom-main py-1 px-2 rounded-md border border-custom-main transition-all delay-75 md:w-auto w-full"
          >
            Buyurtma Berish
          </button>
        </div>
      </form>
    </div>
    <div class="community_privilage md:w-2/3">
      <div class="community_control flex-wrap md:flex-nowrap  flex items-center gap-4">
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
          <div class="price_card w-full rounded-md md:w-1/3 border p-2 border-custom-main" v-for="obj in item.dates">
            <h1 class="text-center h-[60px]">{{ obj.title }}</h1>
            <p>{{ obj.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMainStore } from '@/stores'

export default {
  data() {
    return {
      username: '',
      number: '',
      message: '',
      filter: 'seo',
      store: useMainStore(),
      plan_select: 'seo',
      tarif_select: ''
    }
  },
  computed: {
    filteredPrices() {
      return this.store.prices.filter((item) => item.value === this.filter)
    },
    filteredTarifs() {
      const selectedPlan = this.store.prices.find((item) => item.value === this.plan_select)
      return selectedPlan ? selectedPlan.dates : []
    }
  },
  methods: {
    handleFilter(category) {
      this.filter = category
    },
    updateTarifs() {
      this.tarif_select = '' // reset the tarif_select when plan_select changes
    },
    handleSubmit() {
      console.log('Form submitted:', {
        username: this.username,
        number: this.number,
        message: this.message
      })
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
