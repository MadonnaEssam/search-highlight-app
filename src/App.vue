<template>
  <div id="app">
    <SearchBox />
  </div>
</template>

<script>
import SearchBox from "./components/SearchBox.vue";

export default {
  name: "App",
  components: {
    SearchBox,
  },
};
</script>

<style>
#app {
  background-color: #f5f5f5;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}
</style>
