<template>
  <div>
    <div class="flex flex-row w-full">
      <div class="w-full md:w-1/3">
        <Card
          :icon="category.icon"
          :title="category.title"
          :dateTime="category.updatedOn"
          :description="category.description"
        />
      </div>
      <div class="w-auto md:w-2/3 md:mx-10">
        <div class="my-4" v-for="article in articles" :key="article.id">
          <CardAccordion
            :title="article.title"
            :content="article.content"
            :icon="article.icon"
            :dateTime="article.updatedOn"
            :id="article.id"
          />
        </div>
      </div>
    </div>
    <div class="w-full my-3 border-t-[1px] border-gray-300" />
    <div></div>
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
