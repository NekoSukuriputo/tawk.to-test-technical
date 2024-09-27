<template>
  <!-- :href="`/category/detail/${id}`" -->
  <div
    @click="$router.push({ path: `/category/detail/${id}` })"
    class="min-h-[200px] flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div class="my-4">
      <i :class="`fas fa-${icon} fa-2x text-green-400`"></i>
    </div>
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ category }}
    </h5>
    <div class="flex flex-col items-center justify-between">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ totalArticle }} Articles
      </p>
      <p>Last Update {{ dateTime | timeAgo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCategory",
  props: {
    id: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "user",
    },
    category: {
      type: String,
      default: "Card Category",
    },
    totalArticle: {
      type: Number,
      default: 0,
    },
    dateTime: {
      type: String,
      default: "",
    },
  },
  methods: {},
};
</script>

<style></style>
