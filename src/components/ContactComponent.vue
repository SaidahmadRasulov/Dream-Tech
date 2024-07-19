<template>
  <div class="p-6 flex md:flex-row flex-col justify-between">
    <div class="contact_form md:w-1/3 mb-6">
      <div>
        <div class="mb-3">
          <label for="">
            <span class="text-custom-main">{{ $t('fullname').split(' ')[0] }}</span>
            {{ $t('fullname').split(' ')[1] }}
          </label>
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
            type="text"
            class="outline-none w-full p-2 shadow-sm border rounded-md"
            v-model="number"
            placeholder="+998 90-000-00-00"
          />
        </div>
        <div class="mb-3">
          <label for="area" class="mb-4 text-md text-black"
            ><span class="text-custom-main">{{ $t('message').split(' ')[0] }}</span>
            {{ $t('message').split(' ')[1] }}</label
          >
          <textarea
            draggable="false"
            id="area"
            v-model="message"
            class="outline-none resize-none w-full py-4 px-2 shadow-sm border h-[200px] rounded-md"
          >
          </textarea>
        </div>
        <div class="mt-4 text-end">
          <button
            class="hover:bg-white text-white mr-4 sm:mr-0 bg-custom-main hover:text-custom-main py-1 px-2 rounded-md border border-custom-main transition-all delay-75 md:w-auto w-full"
            @click="handlePost"
          >
            {{ $t('send_btn') }}
          </button>
        </div>
      </div>
    </div>
    <div class="contact_map mb-6 md:w-1/2 md:h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57033.42667374292!2d69.2369180926717!3d41.299067666539564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvnNoa2VudCwgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1720278083890!5m2!1suz!2s"
        allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full mb-6 h-full"
      ></iframe>
    </div>
  </div>
</template>
<script>
import { postDate } from './useFetch'

export default {
  data() {
    return {
      username: '',
      number: '',
      message: '',
      apiUrl: 'https://sunnatakbarov.pythonanywhere.com/api/v1/contact/create/'
    }
  },
  methods: {
    handlePost() {
      let new_user = {
        fullname: this.username,
        phone: this.number,
        message: this.message
      }

      if (new_user.fullname != '' && new_user.phone != '' && new_user.message != '') {
        postDate(this.apiUrl, new_user)
        alert('We will contact you soon !')
        console.log(new_user)
      } else {
        console.log('All fields are required')
      }
    }
  }
}
</script>
<style></style>
