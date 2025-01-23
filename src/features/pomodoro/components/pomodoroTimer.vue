<script setup>
import { inject, computed } from "vue";

const pomodoroStore = inject("usePomodoroStore");
const localeStore = inject("useLocaleStore");
const minutes = computed(() => String(Math.floor(pomodoroStore.time / 60)).padStart(2, "0"));
const seconds = computed(() => String(pomodoroStore.time % 60).padStart(2, "0"));

pomodoroStore.init();
</script>

<template>
  <main>
    <div class="pomodoro-timer">
      <h2>{{ localeStore.translate("pomodoro.title") }}</h2>

      <div
        class="modes"
        v-memo="[
          pomodoroStore.pomodoro,
          pomodoroStore.longBreak,
          pomodoroStore.shortBreak,
          localeStore.locale,
        ]"
      >
        <button
          :class="{ active: pomodoroStore.pomodoro }"
          :disabled="pomodoroStore.isRunning"
          @click="pomodoroStore.setMode('pomodoro')"
        >
          {{ localeStore.translate("pomodoro.modes.pomodoro") }}
        </button>
        <button
          :class="{ active: pomodoroStore.longBreak }"
          :disabled="pomodoroStore.isRunning"
          @click="pomodoroStore.setMode('longBreak')"
        >
          {{ localeStore.translate("pomodoro.modes.longBreak") }}
        </button>
        <button
          :class="{ active: pomodoroStore.shortBreak }"
          :disabled="pomodoroStore.isRunning"
          @click="pomodoroStore.setMode('shortBreak')"
        >
          {{ localeStore.translate("pomodoro.modes.shortBreak") }}
        </button>
      </div>

      <div class="timer" v-memo="[pomodoroStore.time]">{{ minutes }}:{{ seconds }}</div>

      <div class="controls" v-memo="[pomodoroStore.isRunning, localeStore.locale]">
        <button
          v-if="!pomodoroStore.isRunning"
          class="start-timer"
          @click="pomodoroStore.startTimer"
        >
          {{ localeStore.translate("pomodoro.controls.startTimer") }}
        </button>
        <button
          v-if="pomodoroStore.isRunning"
          class="pause-timer"
          @click="pomodoroStore.pauseTimer"
        >
          {{ localeStore.translate("pomodoro.controls.pauseTimer") }}
        </button>
        <button class="reset-timer" @click="pomodoroStore.resetTimer">
          {{ localeStore.translate("pomodoro.controls.resetTimer") }}
        </button>
      </div>
    </div>

    <div class="separator"></div>

    <code>
      <pre>{{ pomodoroStore }}</pre>
    </code>

    <ul>
      <li>
        <a href="#" @click="pomodoroStore.reset">{{ localeStore.translate("pomodoro.reset") }}</a>
      </li>
    </ul>

    <div class="separator"></div>
  </main>
</template>

<style scoped>
code {
  display: flex;
  font-size: 0.75rem;

  pre {
    background-color: var(--surface-container-high);
    color: var(--on-surface);
    padding: 0.5rem;
    border-radius: 0.5rem;
    min-width: 363px;
  }
}

.separator {
  width: 100%;
  height: 1px;
  background-color: var(--surface-container);
  margin: 1rem 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  margin: 1rem 0;
}

.pomodoro-timer {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--surface-container);
  color: var(--on-surface);
}

.timer {
  font-size: 48px;
  margin: 20px 0;
  background-color: var(--surface-container-high);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.controls,
.modes {
  display: flex;
  gap: 0.5rem;
}

button {
  background-color: var(--surface-container-high);
  color: var(--on-surface);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  letter-spacing: 2px;
  padding: 1rem 1rem;

  &:hover {
    background-color: var(--surface-container-highest);
  }
}

button.active {
  color: var(--on-primary);
  background-color: var(--primary-fixed-dim);

  &:hover {
    background-color: var(--primary-fixed);
  }
}

ul {
  margin: 1rem 0;
}
</style>
