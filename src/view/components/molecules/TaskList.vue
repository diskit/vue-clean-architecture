<template>
  <div>
    <div v-for="(task, key) in tasks" :key="key">{{ task.content }}</div>
  </div>
</template>

<script lang="ts">
import { TaskUnit } from "@/state/taskViewState";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TaskList",
  components: {},
  props: {
    tasks: Array as PropType<TaskUnit[]>
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
