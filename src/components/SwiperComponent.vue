<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :loop="true"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    @slideChange="onSlideChange"
    class="h-full swiper"
  >
    <swiper-slide v-for="item in swiperDate.products" class="h-full w-full">
      <div
        class="object-cover h-full bg-no-repeat bg-cover flex items-center justify-center"
        :style="{ backgroundImage: `url(${item.image})` }"
      >
        <div class="lg:w-2/3 swiper_title text-center">
          <h1 class="lg:text-2xl mb-6">{{ item.title }}</h1>
          <p>{{ item.description }}</p>
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

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperDate: useMainStore(),
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay]
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    }
  }
}
</script>
