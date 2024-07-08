<template>
  <div class="home_content p-6">
    <div class="home_title sm:w-2/3 lg:2/3 w-full">
      <h1 class="text-xl md:text-[16px] lg:text-2xl">
        Team <span class="text-custom-main">PRO</span>
      </h1>
      <p class="mt-6 md:text-[12px] lg:text-[16px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eius ad ab
        inventore dolorum consectetur aspernatur est perferendis optio magni, porro esse! Possimus
        accusamus, at iusto similique, sequi commodi odio quia accusantium repellendus, culpa facere
        doloribus deleniti quod. Id, exercitationem.
      </p>
      <p class="mt-6 md:text-[12px] lg:text-[16px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eius ad ab
        inventore dolorum consectetur aspernatur est perferendis optio magni, porro esse! Possimus
        accusamus, at iusto similique, sequi commodi odio quia accusantium repellendus, culpa facere
        doloribus deleniti quod. Id, exercitationem.
      </p>
      <div class="btn_groups lg:flex lg:gap-4 md:flex md:items-center mt-10 md:text-[12px] lg:text-[16px]">
        <RouterLink to="/contact">
          <button
          class="hover:bg-white text-white mr-4 sm:mr-0 bg-custom-main hover:text-custom-main py-1 px-2 rounded-md border border-custom-main transition-all delay-75"
        >
          Boglanish
        </button>
        </RouterLink>
        <RouterLink to="/order">
          <button
          class="text-custom-main hover:text-white hover:bg-custom-main py-1 px-2 rounded-md border border-custom-main transition-all delay-75"
        >
          Buyurtma Berish
        </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
