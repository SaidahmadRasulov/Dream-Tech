<template>
  <div id="particles-js" class="md:h-[100vh] relative">
    <div class="absolute left-0 right-0 z-20">
      <NavbarLayout />
      <div class="relative -z-10 particle_content backdrop-blur-sm rounded-md xl:h-[80vh] container mt-10 mx-auto p-2 ">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
import { RouterView } from 'vue-router'
import NavbarLayout from './components/layout/NavbarLayout.vue'
import { options } from '../particles'
export default {
  components: { NavbarLayout },
  mounted() {
    particlesJS('particles-js', options)
  }
}
</script>
<style>
#particles-js {
  width: 100%;
  height: 100vh;
  background: #e0e0e0;
}
.particle_content {
  background-color: rgba(255, 255, 255, 0.26);
}
</style>
