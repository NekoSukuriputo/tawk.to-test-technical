<template>
  <div>
    <div class="mb-5">
      <Breadcrumb :categorySlug="categorySlug" :currentPage="currentPage" />
    </div>
    <div class="flex flex-row w-full">
      <div class="w-full md:w-1/3 mt-4">
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
    <div class="w-full mt-10 mb-4 border-t-[1px] border-gray-300" />
    <div>
      <Carousel :categories="otherCategories" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/articles/Card.vue";
import { mapGetters } from "vuex";
import CardAccordion from "@/components/articles/CardAccordion.vue";
import Carousel from "@/components/articles/Carousel.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";

export default {
  name: "ArticlePage",
  data() {
    return {
      categorySlug: "",
    };
  },
  components: {
    Card,
    CardAccordion,
    Carousel,
    Breadcrumb,
  },
  computed: {
    ...mapGetters({
      category: "category/category",
      articles: "article/articles",
      otherCategories: "category/otherCategories",
    }),
    currentPage() {
      return this.category.title;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.dispatch("category/getCategory", this.$route.params.slug);
    this.$store.dispatch("article/getArticles");
    this.$store.dispatch(
      "category/getOtherCategories",
      this.$route.params.slug
    );
  },
};
</script>

<style></style>
