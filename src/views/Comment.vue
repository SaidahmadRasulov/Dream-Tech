<template>
  <div class="p-6">
    <h1 class="text-center text-xl ">
      <span class="text-custom-main">{{ $t('comment_title').split(' ')[0] }}</span>
      {{ $t('comment_title').split(' ')[1] }}
    </h1>
    <CommentComponent />
  </div>
</template>
<script>
import CommentComponent from '@/components/CommentComponent.vue'

export default {
  components: { CommentComponent }
}
</script>
<style lang=""></style>
