<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card text-center">
    <img
      :src="user.avatar_url"
      alt=""
      class="round-img"
      :style="{ width: '60px' }"
    />
    <h3>{{ user.login }}</h3>
    <div>
      <RouterLink :to="`/user/${user.login}`" class="btn btn-dark btn-sm my-1">
        More
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.round-img {
  border-radius: 50%;
}
</style>
