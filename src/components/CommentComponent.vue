<template>
  <div class="flex flex-wrap gap-10 md:gap-10 mt-10 justify-center h-[500px] overflow-y-scroll">
    <div
      class="comment_card lg:h-[300px] group hover:bg-custom-main hover:text-white cursor-pointer rounded-md sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-lg transition-all delay-75"
      v-for="item in date"
    >
      <div class="comment_card_header"></div>
      <div class="comment_card_body p-4">
        <h1>
          <span class="text-custom-main group-hover:text-white">{{ $t('client') }}:</span>
          {{ item.user }}
        </h1>
        <p>
          <span class="text-custom-main group-hover:text-white">{{ $t('project_type') }}:</span>
          {{ item.project }}
        </p>
        <p>
          <span class="text-custom-main group-hover:text-white">{{ $t('client_opinion') }}:</span>
          {{ item.comment.slice(0, 200) }}...
        </p>
      </div>
      <div class="comment_card_footer p-4 text-end">
        <p>
          <span class="text-custom-main group-hover:text-white">{{ $t('date') }}:</span>
          {{ item.date }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { useMainStore } from '@/stores'
import { useFetch } from './useFetch'

export default {
  data() {
    return {
      store: useMainStore(),
      apiUrl: 'https://sunnatakbarov.pythonanywhere.com/api/v1/comments/list',
      date: []
    }
  },
  async mounted() {
    this.date = await useFetch(this.apiUrl)
    console.log(this.date)
  }
}
</script>
<style></style>
