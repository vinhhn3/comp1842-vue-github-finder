<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const user = ref({});
const repos = ref([]);
const hireable = ref(false);

const getUser = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    user.value = response.data;
    hireable.value = response.data.hireable;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
  }
};

const getUserRepos = async (username) => {
  // Example for students to implement fetching user repositories
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    repos.value = response.data;
  } catch (error) {
    console.error("Error fetching repos:", error.message);
  }
};

onMounted(() => {
  const { id } = route.params;
  getUser(id);
  getUserRepos(id);
});
</script>

<style scoped>
.round-img {
  border-radius: 50%;
}
</style>

<template>
  <div>
    <router-link to="/" class="btn btn-light">Back to Home</router-link>
    Hireable:
    <i
      :class="
        hireable
          ? 'fas fa-check text-success'
          : 'fas fa-times-circle text-danger'
      "
    ></i>

    <div class="card grid-2">
      <div class="all-center">
        <img
          :src="user.avatar_url"
          :alt="user.name"
          class="round-img"
          :style="{ width: '150px' }"
        />
        <h1>{{ user.name }}</h1>
        <p>{{ user.location }}</p>
      </div>
      <div>
        <div v-if="user.bio">
          <h3>Bio:</h3>
          <p>{{ user.bio }}</p>
        </div>
        <a
          :href="user.html_url"
          class="btn btn-dark my-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show Github Profile
        </a>
        <ul>
          <li v-if="user.login"><strong>Username: </strong>{{ user.login }}</li>
          <li v-if="user.company">
            <strong>Company: </strong>{{ user.company }}
          </li>
          <li v-if="user.blog">
            <strong>Website: </strong>
            <a :href="user.blog" target="_blank" rel="noopener noreferrer">{{
              user.blog
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card text-center">
      <div class="badge badge-primary">Followers: {{ user.followers }}</div>
      <div class="badge badge-success">Following: {{ user.following }}</div>
      <div class="badge badge-light">Repository: {{ user.public_repos }}</div>
      <div class="badge badge-dark">Gist: {{ user.public_gists }}</div>
    </div>
  </div>
</template>
