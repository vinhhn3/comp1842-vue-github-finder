<script setup>
import UserItem from "./UserItem.vue";

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
</script>

<template>
  <div :style="userStyle">
    <UserItem v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<style scoped>
/* Add any specific styles here if needed */
</style>
