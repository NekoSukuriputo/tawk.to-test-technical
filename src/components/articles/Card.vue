<template>
  <div
    class="flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <span class="flex flex-row items-end">
      <i class="fas fa-file"></i>
    </span>
    <span>
      <i :class="`fas fa-${icon}`"></i>
    </span>
    <p class="mb-3 text-lg font-bold">
      {{ title }}
    </p>
    <p class="mb-3 font-normal text-slate-400">
      Updated {{ dateTime | timeAgo }}
    </p>
    <hr />
    <span>
      <i class="fas fa-info"></i>
    </span>
    <p class="mb-3 font-normal text-slate-400">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "CardArticle",
  props: {
    icon: {
      type: String,
      default: "user",
    },
    title: {
      type: String,
      default: "title",
    },
    dateTime: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
