<template>
  <todo-list-page></todo-list-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoListPage from "@/view/components/page/TodoListPage.vue";
import Modules from "@/injector";

export default defineComponent({
  name: "App",
  components: {
    TodoListPage
  },
  setup() {
    new Modules().setup();
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
