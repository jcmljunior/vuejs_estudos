<script setup>
import { provide } from "vue";
import Header from "@/shared/core/components/header.vue";
import Footer from "@/shared/core/components/footer.vue";
import PomodoroTimer from "@/features/pomodoro/components/pomodoroTimer.vue";
import usePomodoroStore from "@/features/pomodoro/stores/pomodoroStore";

provide("usePomodoroStore", usePomodoroStore());
</script>

<template>
  <Header />
  <PomodoroTimer />
  <Footer />
</template>
