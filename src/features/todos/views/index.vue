<script setup>
import { provide, inject } from "vue";
import useTodosStore from "@/features/todos/stores/todosStore";
import { validateField, validateForm, resetForm } from "@/features/todos/composables/todoForm";
import { formData, errors } from "@/features/todos/composables/todoForm";
import Header from "@/shared/core/components/header.vue";
import Footer from "@/shared/core/components/footer.vue";

const todosStore = useTodosStore();
const localeStore = inject("useLocaleStore");
const handleSubmit = async () => {
  await validateField("name", formData.name);

  if (!validateForm()) {
    todosStore.addTodo({
      ...formData,
      done: false,
    });
    resetForm();
  }
};

provide("useTodosStore", todosStore);
</script>

<template>
  <Header />
  <main>
    <div class="todos">
      <h2>{{ localeStore.translate("todos.title") }}</h2>

      <form @submit.prevent="handleSubmit" class="todos__form">
        <input
          id="name"
          name="name"
          type="text"
          :placeholder="localeStore.translate('todos.form.placeholder')"
          v-model="formData.name"
          :hasError="!!errors.name"
          :errors="errors"
        />
        <button class="add-todo" type="submit">
          {{ localeStore.translate("todos.form.add") }}
        </button>
      </form>

      <ul v-if="todosStore.list.length">
        <li v-for="(todo, index) in todosStore.list" :key="index">
          <input type="checkbox" @click="todosStore.toggleTodo(index)" v-model="todo.done" />
          <span>{{ todo.name }}</span>

          <button class="remove-todo" @click="todosStore.removeTodo(index)">
            {{ localeStore.translate("todos.actions.remove") }}
          </button>
        </li>
      </ul>

      <p v-else>{{ localeStore.translate("todos.list.empty") }}</p>
    </div>

    <div class="separator"></div>

    <code>
      <pre>{{ todosStore }}</pre>
    </code>

    <ul>
      <li>
        <a href="#" @click="todosStore.reset">{{ localeStore.translate("todos.reset") }}</a>
      </li>
    </ul>

    <div class="separator"></div>
  </main>
  <Footer />
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

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  margin-bottom: 1rem;
}

.separator {
  width: 100%;
  height: 1px;
  background-color: var(--surface-container);
  margin: 1rem 0;
}

.todos__form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.todos__form input {
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--surface-container);
  color: var(--on-surface);
  border: none;
  outline: 1px solid var(--surface-container);
  font-weight: bold;

  &:focus {
    outline-color: var(--primary-fixed-dim);
  }
}

.todos__form .add-todo {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--surface-container);
  color: var(--on-surface);
  border: none;

  &:hover {
    background-color: var(--surface-container-highest);
    cursor: pointer;
  }
}

.todos ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.todos li {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--surface-container);
  color: var(--on-surface);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.todos li input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--surface-container);
  color: var(--on-surface);

  &:checked + span {
    text-decoration: line-through;
  }
}

.todos li input:not(:disabled) {
  cursor: pointer;
}

.todos li span {
  flex: 1;
}

.todos li .remove-todo {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--surface-container-high);
  color: var(--on-surface);
  border: none;
  font-weight: bold;

  &:hover {
    background-color: var(--surface-container-highest);
    cursor: pointer;
  }
}

ul:not(.todos) {
  margin: 1rem 0;
}
</style>
