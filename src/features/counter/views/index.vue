<script setup>
import { provide } from "vue";
import Header from "@/shared/core/components/header.vue";
import Footer from "@/shared/core/components/footer.vue";
import Counter from "@/features/counter/components/counter.vue";
import useCounterStore from "@/features/counter/stores/counterStore";

provide("useCounterStore", useCounterStore());
</script>

<template>
  <Header />
  <Counter />
  <Footer />
</template>
