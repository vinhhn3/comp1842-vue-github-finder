<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav className="navbar bg-success">
    <h1><i className="fab fa-github" /> GitHub Finder</h1>
    <ul>
      <li>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/">Home</RouterLink>
      </li>
    </ul>
  </nav>
</template>
