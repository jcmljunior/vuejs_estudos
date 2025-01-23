import { reactive } from "vue";

const TODOS_KEY = "user-todos";
const useTodosStore = () => reactive({
  list: JSON.parse(localStorage.getItem(TODOS_KEY)) || [],

  addTodo(todo) {
    this.list.push(todo);
    localStorage.setItem(TODOS_KEY, JSON.stringify(this.list));
  },

  removeTodo(index) {
    this.list.splice(index, 1);
    localStorage.setItem(TODOS_KEY, JSON.stringify(this.list));
  },

  toggleTodo(index) {
    this.list = this.list.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });

    localStorage.setItem(TODOS_KEY, JSON.stringify(this.list));
  },

  reset() {
    this.list = [];
    localStorage.setItem(TODOS_KEY, JSON.stringify(this.list));
  },
});

export default useTodosStore
