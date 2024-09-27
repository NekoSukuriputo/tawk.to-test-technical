<template>
  <div class="container mx-auto min-h-screen flex flex-col">
    <HeaderHero class="my-[3rem]" />
    <div class="bg-gray-200">
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
};
</script>

<style></style>
