<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :loop="true"
    :scrollbar="{ draggable: true }"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false
    }"
    class="h-full swiper"
  >
  <swiper-slide v-for="(item, index) in dates" :key="index" class="h-full w-full">
    <div
      class="relative h-full w-full flex justify-center items-end pb-10"
    >
      <div
        class="absolute inset-0 bg-center bg-no-repeat bg-cover brightness-50"
        :style="{ backgroundImage: `url(${item.image_url})` }"
      ></div>
      <div class="swiper_title text-center text-white px-10 z-10 h-[120px]">
        <h1 class="lg:text-2xl h-[40px] text-custom-main">{{ item.title }}</h1>
        <p>{{ item.description.slice(0, 240) }}</p>
      </div>
    </div>
  </swiper-slide>
  </swiper>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useMainStore } from '@/stores'
import {  useFetch } from './useFetch'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperDate: useMainStore(),
      dates: [],
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      apiUrl: 'https://sunnatakbarov.pythonanywhere.com/api/v1/posts/list'
    }
  },
  async mounted() {
    this.dates = await useFetch(this.apiUrl)
    console.log(this.dates)
  }
}
</script>

<style></style>
