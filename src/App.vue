<script setup>
import { provide } from "vue";
import useLocaleStore from "@/features/locale/stores/localeStore";

provide("useLocaleStore", useLocaleStore());
</script>

<template>
  <router-view></router-view>
</template>
