<template>
  <div class="p-5">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="category in categories" :key="category.id">
        <CardCategory
          :category="category.title"
          :total-article="category.totalArticle"
          :icon="category.icon"
          :dateTime="category.updatedOn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardCategory from "../../components/home/CardCategory.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    CardCategory,
  },
  mounted() {
    this.$store.dispatch("category/getCategories");
  },

  computed: {
    ...mapGetters({
      categories: "category/categories",
    }),
  },
};
</script>

<style></style>
