<script setup>
import { provide } from "vue";
import useLocaleStore from "@/features/locale/stores/localeStore";

const localeStore = useLocaleStore();
localeStore.init();

provide("useLocaleStore", localeStore);
</script>

<template>
  <router-view></router-view>
</template>
