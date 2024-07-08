<template>
  <header class="bg-white z-20 sm:px-4" ref="headerRef">
    <div class="container mx-auto">
      <div class="navbar flex justify-between items-center w-full py-4 px-4 sm:px-0">
        <div class="navbar_logo">
          <h1 class="text-2xl">Dream <span class="text-custom-main">Tech</span></h1>
        </div>
        <nav class="navbar_nav hidden md:block">
          <ul class="nav_group flex gap-4">
            <li class="nav_item">
              <RouterLink to="/" :class="{ 'text-custom-main': route.path === '/' }"
                >Bosh Sahifa</RouterLink
              >
            </li>
            <li class="nav_item">
              <RouterLink to="/projects" :class="{ 'text-custom-main': route.path === '/projects' }"
                >Loyihalar</RouterLink
              >
            </li>
            <li class="nav_item">
              <RouterLink to="/comments" :class="{ 'text-custom-main': route.path === '/comments' }"
                >Fikrlar</RouterLink
              >
            </li>
            <li class="nav_item">
              <RouterLink to="/contact" :class="{ 'text-custom-main': route.path === '/contact' }"
                >Bog'lanish</RouterLink
              >
            </li>
            <li class="nav_item">
              <RouterLink to="/order" :class="{ 'text-custom-main': route.path === '/order' }"
                >Buyurtma Berish</RouterLink
              >
            </li>
          </ul>
        </nav>
        <div class="md:hidden">
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
          <a href="tel:+998901427141">
            <button
              class="hover:bg-white text-white mr-4 sm:mr-0 bg-custom-main hover:text-custom-main py-1 px-2 rounded-md border border-custom-main transition-all delay-75"
            >
              +998 90-142-71-41
            </button>
          </a>
        </div>
      </div>
      <div v-if="menuOpen" class="md:hidden shadow-lg absolute z-10 bg-white w-full">
        <nav class="navbar_nav">
          <ul class="nav_group flex flex-col gap-4 p-4">
            <li class="nav_item">
              <RouterLink
                to="/"
                @click="toggleMenu"
                :class="{ 'text-custom-main': route.path === '/' }"
                >Bosh Sahifa</RouterLink
              >
            </li>
            <li class="nav_item">
              <RouterLink
                to="/projects"
                @click="toggleMenu"
                :class="{ 'text-custom-main': route.path === '/projects' }"
                >Loyihalar</RouterLink
              >
            </li>
            <li class="nav_item">
              <RouterLink
                to="/comments"
                @click="toggleMenu"
                :class="{ 'text-custom-main': route.path === '/comments' }"
                >Fikrlar</RouterLink
              >
            </li>
            <li class="nav_item">
              <RouterLink
                to="/contact"
                @click="toggleMenu"
                :class="{ 'text-custom-main': route.path === '/contact' }"
                >Bog'lanish</RouterLink
              >
            </li>
            <li class="nav_item">
              <RouterLink
                to="/order"
                @click="toggleMenu"
                :class="{ 'text-custom-main': route.path === '/order' }"
                >Buyurtma Berish</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      route: useRoute(),
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  },
  mounted() {
    this.headerRef = this.$refs.headerRef
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.headerRef.classList.add('fixed', 'w-full')
      } else {
        this.headerRef.classList.remove('fixed', 'w-full')
      }
    }
  }
}
</script>

