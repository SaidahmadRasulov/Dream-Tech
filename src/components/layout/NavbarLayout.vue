<template>
  <div
    class="container mx-auto backdrop-blur-sm z-20 sm:px-4 header_content rounded-b-xl"
    ref="headerRef"
  >
    <div class="navbar flex justify-between items-center w-full py-4 px-4 sm:px-0">
      <div class="navbar_logo">
        <h1 class="text-2xl">Dream <span class="text-custom-main">Tech</span></h1>
      </div>
      <nav class="navbar_nav hidden md:block">
        <ul class="nav_group flex gap-4">
          <li class="nav_item">
            <RouterLink to="/" :class="{ 'text-custom-main': route.path === '/' }">{{
              $t('Home')
            }}</RouterLink>
          </li>
          <li class="nav_item">
            <RouterLink
              to="/projects"
              :class="{ 'text-custom-main': route.path === '/projects' }"
              >{{ $t('Projects') }}</RouterLink
            >
          </li>
          <li class="nav_item">
            <RouterLink
              to="/comments"
              :class="{ 'text-custom-main': route.path === '/comments' }"
              >{{ $t('Comments') }}</RouterLink
            >
          </li>
          <li class="nav_item">
            <RouterLink to="/contact" :class="{ 'text-custom-main': route.path === '/contact' }">{{
              $t('Contact')
            }}</RouterLink>
          </li>
          <li class="nav_item">
            <RouterLink to="/order" :class="{ 'text-custom-main': route.path === '/order' }">{{
              $t('Order')
            }}</RouterLink>
          </li>
        </ul>
      </nav>
      
      <div class="md:hidden">
        <select
          id=""
          @change="changeLang"
          class="cursor-pointer outline-none py-1.5 mr-4 px-4 rounded-lg"
          v-model="lang"
        >
          <option v-for="item in languages" :value="item.val">
            {{ item.title }}
          </option>
        </select>
        <button @click="toggleMenu" class="text-custom-main focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div class="navbar_contact hidden md:block">
        <select
          id=""
          @change="changeLang"
          class="cursor-pointer outline-none py-1.5 mr-4 px-4 rounded-lg"
          v-model="lang"
        >
          <option v-for="item in languages" :value="item.val">
            {{ item.title }}
          </option>
        </select>
        <a href="tel:+998901427141">
          <button
            class="hover:bg-white text-white mr-4 sm:mr-0 bg-custom-main hover:text-custom-main py-1 px-2 rounded-md border border-custom-main transition-all delay-75"
          >
            +998 90-142-71-41
          </button>
        </a>
      </div>
    </div>
    <div
      v-if="menuOpen"
      @click="toggleMenu"
      class="md:hidden shadow-lg absolute z-20 bg-white w-full"
    >
      <nav class="navbar_nav">
        <ul class="nav_group flex flex-col p-4 gap-4">
          <li class="nav_item">
            <RouterLink to="/" :class="{ 'text-custom-main': route.path === '/' }">{{
              $t('Home')
            }}</RouterLink>
          </li>
          <li class="nav_item">
            <RouterLink
              to="/projects"
              :class="{ 'text-custom-main': route.path === '/projects' }"
              >{{ $t('Projects') }}</RouterLink
            >
          </li>
          <li class="nav_item">
            <RouterLink
              to="/comments"
              :class="{ 'text-custom-main': route.path === '/comments' }"
              >{{ $t('Comments') }}</RouterLink
            >
          </li>
          <li class="nav_item">
            <RouterLink to="/contact" :class="{ 'text-custom-main': route.path === '/contact' }">{{
              $t('Contact')
            }}</RouterLink>
          </li>
          <li class="nav_item">
            <RouterLink to="/order" :class="{ 'text-custom-main': route.path === '/order' }">{{
              $t('Order')
            }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      route: useRoute(),
      menuOpen: false,
      lang: localStorage.getItem('locale') || 'uz',
      languages: [
        {
          id: 1,
          title: 'RU',
          val: 'ru'
        },
        {
          id: 2,
          title: 'ENG',
          val: 'en'
        },
        {
          id: 3,
          title: 'UZB',
          val: 'uz'
        }
      ]
    }
  },
  watch: {
    lang(newLang) {
      this.$i18n.locale = newLang
      localStorage.setItem('locale', newLang)
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    changeLang() {
      this.$i18n.locale = this.lang
      console.log(this.lang)
    }
  },
  mounted() {
    this.$i18n.locale = this.lang
  }
}
</script>

<style scoped>
.header_content {
  background-color: rgba(255, 255, 255, 0.26);
}
</style>
