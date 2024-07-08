<template>
  <div
    class="flex gap-10 flex-wrap overflow-y-scroll md:h-[500px] lg:h-[600px] justify-center my-4"
  >
    <div
      class="project_card w-full lg:w-1/4 md:w-1/3 h-[400px] flex items-end justify-center relative overflow-hidden md:overflow-hidden text-xl bg-cover bg-center"
      v-for="item in store.products"
      :style="{ backgroundImage: `url(${item.image})` }"
    >
      <h1 class="project_card_title">{{ item.title }}</h1>
      <div class="project_card_hover">
        <div class="card_hover_title">
          <h1 class="text-2xl text-custom-main">{{ item.title }}</h1>
          <p>{{ item.description.slice(0, 150) }}...</p>
        </div>
        <RouterLink :to="`/projects/${item.id}`">
          <button
            class="hover:bg-transparent text-white mr-4 sm:mr-0 bg-custom-main hover:text-custom-main py-1 px-2 rounded-md border border-custom-main transition-all delay-75"
          >
            Ko'rish
          </button>
        </RouterLink>
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
<style>
.project_card_hover {
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.562);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -100%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  flex-direction: column;
  padding: 1rem;
  color: white;
  text-align: center;
  gap: 1rem;
}
.project_card:hover .project_card_hover {
  bottom: 0;
  transition: all 0.3s ease-in-out;
}
.project_card:hover .project_card_title {
  display: none;
}
</style>
