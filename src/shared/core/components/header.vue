<script setup>
import { inject } from "vue";
import { routes } from "@/features/core/app/router";

const localeStore = inject("useLocaleStore");
</script>

<template>
  <header>
    <h3>{{ localeStore.translate("header.title") }}</h3>
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  padding: 2rem;
  text-align: center;
}

ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
