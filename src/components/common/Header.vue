<template>
  <div class="flex flex-col justify-center gap-y-3 bg-white">
    <div class="text-center">
      <h1 class="text-2xl font-bold">Knowledge base doesn't have to be boring</h1>
      <h3 class="text-xl">Everything you need to manage your messaging</h3>
    </div>
    <SearchBar />
  </div>
</template>

<script>
export default {
  name: "HeaderHero",
  components: {
    SearchBar: () => import("../home/SearchBar.vue"),
  },
};
</script>
