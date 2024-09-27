<template>
  <div class="w-fullmx-auto bg-white rounded-lg overflow-hidden">
    <div class="border-t border-gray-200">
      <button
        @click="toggleAccordion"
        class="w-full text-left p-4 border-b flex items-center justify-between text-gray-700 hover:bg-gray-100"
      >
        <div class="flex flex-row justify-start items-center">
          <span class="mr-4">
            <i :class="`fas fa-${icon} fa-md text-green-400`"></i>
          </span>
          <div>
            <p class="font-bold">{{ title }}</p>
            <p class="text-sm text-gray-500">
              Updated {{ dateTime | formatDateSort }}
            </p>
          </div>
        </div>
        <svg
          :class="{ 'rotate-180': isActive }"
          class="w-6 h-6 text-gray-400 transform transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 9l6 6 6-6"
          ></path>
        </svg>
      </button>
      <!-- Collapsible content -->
      <div v-show="isActive" class="px-4 py-2">
        <p class="text-gray-600">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAccordion",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "user",
    },
    dateTime: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
