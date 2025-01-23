<script setup>
import { inject } from "vue";
import { MIN_COUNT, MAX_COUNT } from "@/features/counter/stores/counterStore";

const counterStore = inject("useCounterStore");
const localeStore = inject("useLocaleStore");
</script>

<template>
  <main>
    <p class="info">{{ localeStore.translate("counter.info") }}</p>

    <div class="counter">
      <p>{{ counterStore.count }}</p>
      <div class="actions">
        <button @click="counterStore.increment" :disabled="counterStore.count >= MAX_COUNT">
          {{ localeStore.translate("counter.actions.increment") }}
        </button>
        <button @click="counterStore.decrement" :disabled="counterStore.count <= MIN_COUNT">
          {{ localeStore.translate("counter.actions.decrement") }}
        </button>
      </div>
    </div>

    <div class="separator"></div>

    <code>
      <pre>{{ counterStore }}</pre>
    </code>

    <ul>
      <li>
        <a href="#" @click="counterStore.reset">{{ localeStore.translate("counter.reset") }}</a>
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

.info {
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background-color: var(--surface-container-high);
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

.counter {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--surface-container);
  color: var(--on-surface);
}

.counter p {
  font-size: 48px;
  margin: 20px 0;
  background-color: var(--surface-container-high);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.actions {
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

  &:hover:not([disabled]) {
    background-color: var(--surface-container-highest);
  }
}

button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

ul {
  margin: 1rem 0;
}
</style>
