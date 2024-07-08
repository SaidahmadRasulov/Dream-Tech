<template>
  <div class="p-6" v-for="item in selectedDate" :key="item.id">
    <div class="flex flex-col gap-4 sm:flex-row justify-between mb-2">
      <div class="single_app_title sm:w-1/2">
        <h1 class="text-custom-main text-2xl">{{ item.title }}</h1>
        <p class="my-4">{{ item.description }}</p>
        <p>{{ item.description }}</p>
      </div>
      <div class="single_app_image sm:mx-0 mx-auto">
        <img :src="mainImage" alt="" />
      </div>
    </div>
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :breakpoints="{
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }"
      :space-between="20"
      :loop="true"
      :scrollbar="{ draggable: true }"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      class="h-full w-full swiper py-4"
    >
      <swiper-slide v-for="image in item.images" :key="image.id" class="p-4 w-full">
        <img
          @click="handleChangeMainImage(image.url)"
          :src="image.url"
          alt=""
          class="sm:h-[250px] mx-auto"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
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
      id: useRoute().params.id,
      store: useMainStore(),
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      mainImage: ''
    }
  },
  computed: {
    selectedDate() {
      return this.store.products.filter((item) => item.id == this.id)
    }
  },
  watch: {
    selectedDate: {
      immediate: true,
      handler(newVal) {
        if (newVal.length > 0) {
          this.mainImage = newVal[0].image
        }
      }
    }
  },
  methods: {
    handleChangeMainImage(imageUrl) {
      this.mainImage = imageUrl
    }
  }
}
</script>

<style>
/* Add your styles here */
</style>
