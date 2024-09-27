<template>
  <div
    class="flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <span class="flex flex-row items-end ml-auto">
      <i class="fas fa-file text-green-300"></i>
    </span>
    <span class="my-4">
      <i :class="`fas fa-${icon} fa-3x text-green-400`"></i>
    </span>
    <p class="mb-3 text-lg font-bold">
      {{ title }}
    </p>
    <p class="mb-3 font-normal text-slate-400">
      Updated {{ dateTime | timeAgo }}
    </p>
    <div class="w-full my-2 border-t-[1px] border-gray-200" />
    <span
      class="inline-flex items-center justify-center w-5 h-5 bg-green-200 rounded-full my-2"
    >
      <i class="fas fa-info fa-xs text-green-600"></i>
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
