<template>
  <div class="p-6" v-if="date">
    <div class="flex flex-col gap-4 sm:flex-row justify-between mb-[10rem]">
      <div class="single_app_title sm:w-1/2">
        <h1 class="text-custom-main text-2xl">{{ date.title }}</h1>
        <p class="my-4">{{ date.description }}</p>
        <p>{{ date.additionalDescription }}</p>
      </div>
      <div class="single_app_image lg:w-3/5 lg:h-[280px] sm:mx-0 mx-auto">
        <img :src="mainImage" alt="Main Image" class=" h-full w-full object-contain" />
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
      <swiper-slide v-for="imgItem in date.images" :key="imgItem.id" class="p-4 !w-1/3 cursor-pointer">
        <img
          @click="handleChangeMainImage(imgItem.image)"
          :src="imgItem.image"
          alt="Image Slide"
          class="sm:h-[150px] w-full mx-auto object-cover"
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
import { useFetch } from './useFetch'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      id: parseInt(useRoute().params.id),
      store: useMainStore(),
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      mainImage: '',
      date: null,
      apiUrl: `https://sunnatakbarov.pythonanywhere.com/api/v1/posts/detail/${useRoute().params.id}`
    }
  },
  watch: {
    date: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.mainImage = newVal.image_url
        }
      }
    }
  },
  methods: {
    handleChangeMainImage(imageUrl) {
      this.mainImage = imageUrl
    }
  },
  async mounted() {
    try {
      const response = await useFetch(this.apiUrl)
      // Directly assign the object response to date
      if (response && typeof response === 'object') {
        this.date = response
      } else {
        console.error('API response is not an object:', response)
        this.date = null
      }
      console.log(this.date)
    } catch (error) {
      console.error('Error fetching data:', error)
      this.date = null // Ensure date is null if fetch fails
    }
  }
}
</script>

<style>
/* Add your styles here */
</style>
