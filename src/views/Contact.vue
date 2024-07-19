<template lang="">
  <div>
    <h1 class="text-center text-2xl  py-4"><span class="text-custom-main">{{ $t('contact_title').split(' ')[0] }}</span>
      {{ $t('contact_title').split(' ').slice(1).join(' ') }}</h1>
    <ContactComponent />
  </div>
</template>
<script>
import ContactComponent from '@/components/ContactComponent.vue'
export default {
  components: { ContactComponent }
}
</script>
<style lang=""></style>
