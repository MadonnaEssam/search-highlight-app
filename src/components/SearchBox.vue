<template>
  <div class="search-page">
    <div class="row">
      <div class="col-8 search-box">
        <h1>Search</h1>
        <input
          v-model="query"
          @input="search"
          placeholder="Search articles..."
        />

        <button v-if="query" class="clear-button" @click="clearSearch">
          &times;
        </button>
      </div>
      <div class="col-2 offset-2 author-info">
        <p>
          <B>bitsofcode</B> Articles on Frontend Development. All articles are
          written by <B class="text-underline">Ire Aderinokun</B>, Frontend
          Developer and User Interface Designer.
        </p>
        <div class="follow-section">
          <a
            class="twitter-button"
            href="https://twitter.com/ireaderinokun"
            target="_blank"
          >
            <img src="@/assets/images/twitter.svg" />
            Follow @ireaderinokun
          </a>
          <span class="follower-count">19.1K followers</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <div v-if="filteredArticles.length > 0" class="results">
          <p class="result-count">
            <b>{{ filteredArticles.length }} posts</b> were found
          </p>
          <div v-for="post in filteredArticles" :key="post.id" class="post">
            <h2 v-html="highlight(post.title, searchQuery)"></h2>
            <p>{{ post.date }}</p>
            <p v-html="highlight(post.content, searchQuery)"></p>
          </div>
        </div>
        <div v-else class="no-results">No results found.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      articles: [
        {
          id: 1,
          title:
            "Understanding the difference between grid-template and grid-auto",
          date: "Oct 09, 2018",
          content:
            "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns.",
        },
        {
          id: 2,
          title: "Recreating the GitHub Contribution Graph with CSS Grid",
          date: "Oct 10, 2018",
          content:
            "Description of how to recreate the GitHub contribution graph using CSS Grid Layout.",
        },
      ],
      filteredArticles: [],
    };
  },
  methods: {
    search() {
      if (this.query) {
        this.filteredArticles = this.articles.filter((article) =>
          article.content.toLowerCase().includes(this.query.toLowerCase())
        );
      } else {
        this.filteredArticles = [];
      }
    },
    clearSearch() {
      this.query = "";
      this.filteredArticles = [];
    },
    highlight(text) {
      if (!this.query) {
        return text;
      }
      const regex = new RegExp(`(${this.query})`, "gi");
      return text.replace(regex, "<mark class='p-0'>$1</mark>");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>