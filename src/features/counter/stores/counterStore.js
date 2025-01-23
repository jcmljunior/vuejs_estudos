import { reactive } from 'vue'

const MIN_COUNT = 0
const MAX_COUNT = 5
const COUNTER_KEY = 'user-counter'
const useCounterStore = () =>
  reactive({
    count: Number(localStorage.getItem(COUNTER_KEY)) || 0,

    increment() {
      this.count = Math.min(this.count + 1, MAX_COUNT)
      localStorage.setItem(COUNTER_KEY, this.count.toString())
    },

    decrement() {
      this.count = Math.max(this.count - 1, MIN_COUNT)
      localStorage.setItem(COUNTER_KEY, this.count.toString())
    },

    reset() {
      this.count = 0
      localStorage.setItem(COUNTER_KEY, this.count.toString())
    },
  })

export {
  useCounterStore as default,
  MIN_COUNT,
  MAX_COUNT
}
