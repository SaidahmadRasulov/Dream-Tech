<template>
  <div class="flex flex-wrap gap-10 md:gap-10 mt-10 justify-center h-[500px] overflow-y-scroll">
    <div class="comment_card group hover:bg-custom-main hover:text-white cursor-pointer rounded-md sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-lg transition-all delay-75" v-for="item in store.comments">
      <div class="comment_card_header"></div>
      <div class="comment_card_body  p-4 ">
        <h1><span class="text-custom-main group-hover:text-white">Mijoz:</span> {{ item.user }}</h1>
        <p><span class="text-custom-main group-hover:text-white">Proekt:</span> {{ item.project }}</p>
        <p><span class="text-custom-main group-hover:text-white">Fikri:</span> {{ item.comment }}</p>
      </div>
      <div class="comment_card_footer p-4 text-end">
        <p><span class="text-custom-main group-hover:text-white">Sana:</span> {{ item.date }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { useMainStore } from '@/stores'

export default {
  data() {
    return {
      store: useMainStore()
    }
  }
}
</script>
<style></style>
