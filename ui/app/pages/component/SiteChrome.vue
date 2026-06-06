<template>
  <div>
    <SiteNavbar v-if="showChrome" />
    <slot />
    <SiteFooter v-if="showChrome" />
  </div>
</template>

<script setup lang="ts">
import SiteFooter from './SiteFooter.vue'
import SiteNavbar from './SiteNavbar.vue'

const route = useRoute()

const showChrome = computed(() => !route.path.startsWith('/login'))
</script>
