<template>
  <div id="particles-js" class="h-[100vh] relative">
    <div class="absolute left-0 right-0">
      <NavbarLayout />
      <div class="particle_content rounded-md  xl:h-[80vh] bg-white container mt-10 mx-auto p-2">
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
  background: #bab9b9;
}
</style>
