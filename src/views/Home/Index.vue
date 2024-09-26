<template>
  <div>
    <div class="bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4">
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
import Header from "../components/home/Header.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    HeaderHero: Header,
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
