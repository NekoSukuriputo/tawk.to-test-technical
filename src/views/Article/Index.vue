<template>
  <div class="flex flex-row w-full">
    <div class="w-full md:w-1/3">
      <Card
        :icon="category.icon"
        :title="category.title"
        :dateTime="category.updatedOn"
        :description="category.description"
      />
    </div>
    <div class="w-auto gap-y-4 md:w-2/3">
      <div v-for="article in articles" :key="article.id">
        <CardAccordion
          :title="article.title"
          :content="article.content"
          :icon="article.icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/articles/Card.vue";
import { mapGetters } from "vuex";
import CardAccordion from "../../components/articles/CardAccordion.vue";

export default {
  name: "ArticlePage",
  components: {
    Card,
    CardAccordion,
  },
  computed: {
    ...mapGetters({
      category: "category/category",
      articles: "article/articles",
    }),
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.dispatch("category/getCategory", this.$route.params.slug);
    this.$store.dispatch("article/getArticles");
  },
};
</script>

<style></style>
