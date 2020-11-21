<template>
  <h1>タスク一覧</h1>
  <task-list :tasks="state.values"></task-list>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import TaskList from "@/view/components/molecules/TaskList.vue";
import { Keys } from "@/modules";

export default defineComponent({
  name: "TodoList",
  components: {
    TaskList
  },
  setup: () => {
    const controller = inject(Keys.TaskUseCaseKey)!!;
    const state = inject(Keys.TaskViewStateKey)!!;
    onBeforeMount(() => {
      controller.find();
    });
    return {
      state
    }
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
