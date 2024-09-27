<template>
  <div class="relative">
    <h2 class="text-center text-xl font-semibold mb-4">Other Categories</h2>
    <div class="flex overflow-hidden">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{
          transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
        }"
      >
        <div
          v-for="(item, index) in categories"
          :key="index"
          class="flex-none max-w-[370px] md:w-1/3 p-4"
        >
          <div class="p-6 border rounded-lg shadow-md text-center bg-white">
            <div class="text-green-500 text-3xl mb-2">
              <i :class="`fas fa-${item.icon} fa-2x text-green-400`"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.totalArticle }} articles</p>
            <p class="text-gray-500 text-sm">
              Last update {{ item.updatedOn | timeAgo }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="prev"
      class="absolute -left-7 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow w-10 h-10"
    >
      &#10094;
    </button>
    <button
      @click="next"
      class="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow w-10 h-10"
    >
      &#10095;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
      visibleItems: 3,
    };
  },
  methods: {
    next() {
      // Loop back to the start
      if (
        this.currentIndex <
        Math.ceil(this.categories.length / this.visibleItems) - 1
      ) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop to the start
      }
    },
    prev() {
      // Loop back to the end
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex =
          Math.ceil(this.categories.length / this.visibleItems) - 1; // Loop to the end
      }
    },
  },
};
</script>

<style scoped>
.carousel {
  transition: transform 0.5s ease-in-out;
}
</style>
