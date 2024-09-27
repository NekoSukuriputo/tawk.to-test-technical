<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { initFlowbite } from "flowbite";

export default {
  mounted() {
    initFlowbite();
  },
};
</script>

<style lang="scss" scoped>
@import "scss/main.scss";
</style>
