<template>
  <div>
    <h1 class="text-center text-xl"><span class="text-custom-main">{{ $t('order_title').split(' ')[0] }}</span>
      {{ $t('order_title').split(' ').slice(1).join(' ') }}</h1>
    <OrderComponent />
  </div>
</template>
<script>
import OrderComponent from '@/components/OrderComponent.vue'
export default {
  components: { OrderComponent }
}
</script>
<style lang=""></style>
