<template>
  <div class="py-6">
    <h1 class="text-center text-xl">
      <span class="text-custom-main">{{ $t('project_title').split(' ')[0] }}</span>
      {{ $t('project_title').split(' ')[1] }}
    </h1>
    <ProjectsComponent />
  </div>
</template>
<script>
import ProjectsComponent from '@/components/ProjectsComponent.vue'
export default {
  components: { ProjectsComponent }
}
</script>
<style lang=""></style>
