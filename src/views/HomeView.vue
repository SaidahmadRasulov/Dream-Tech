<template>
  <div class="md:flex h-full md:items-center px-4">
    <div class="md:w-1/2 lg:2/3 w-full">
      <HomeComponent />
    </div>
    <div class="md:w-1/2 lg:1/3 h-[60vh]">
      <SwiperComponent />
    </div>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import SwiperComponent from '@/components/SwiperComponent.vue'

export default {
  components: { HomeComponent, SwiperComponent },
  mounted() {}
}
</script>

<style scoped></style>
