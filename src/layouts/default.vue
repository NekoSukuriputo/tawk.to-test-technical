<template>
  <div class="container mx-auto">
    <HeaderHero />
    <div class="bg-gray-100">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header.vue";
export default {
  name: "DefaultLayout",
  components: {
    HeaderHero: Header,
  },
}
</script>

<style></style>
