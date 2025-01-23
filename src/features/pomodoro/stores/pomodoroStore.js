import { reactive } from "vue"

const POMODORO_KEY = "user-pomodoro"
const usePomodoroStore = () =>
  reactive({
    isRunning: false,
    isPaused: true,
    pomodoro: true,
    shortBreak: false,
    longBreak: false,
    time: 0,
    timer: 0,

    init() {
      const pomodoro = JSON.parse(localStorage.getItem(POMODORO_KEY))
      if (pomodoro) {
        // Não salva o estado de execução do temporizador.
        // Sempre que a página for recarregada, o temporizador será inicializado no estado de pausa.
        // this.isRunning = pomodoro.isRunning
        // this.isPaused = pomodoro.isPaused
        this.pomodoro = pomodoro.pomodoro
        this.shortBreak = pomodoro.shortBreak
        this.longBreak = pomodoro.longBreak
        this.time = pomodoro.time
        this.timer = pomodoro.timer
      } else {
        this.setMode('pauseTimer')
        this.setMode('pomodoro')
      }
    },

    reset() {
      localStorage.removeItem(POMODORO_KEY)
      this.setMode('pauseTimer')
      this.setMode('pomodoro')
    },

    startTimer() {
      this.setMode('startTimer')
    },

    pauseTimer() {
      this.setMode('pauseTimer')
    },

    resetTimer() {
      this.setMode('resetTimer')
    },

    setTimer() {
      this.timer = setInterval(() => {
        if (this.time > 0) {
          this.time--
          localStorage.setItem(POMODORO_KEY, JSON.stringify(this))
        } else {
          this.setMode('resetTimer')

          alert(`session complete!`)
        }
      }, 1000)
    },

    setMode(mode) {
      switch (mode) {
        case 'startTimer':
          this.isRunning = true
          this.isPaused = false
          this.setTimer()

          break

        case 'pauseTimer':
          this.isRunning = false
          this.isPaused = true
          clearInterval(this.timer)

          break

        case 'resetTimer':
          this.setMode('pauseTimer')

          if (this.shortBreak) {
            this.setMode('shortBreak')
          } else if (this.longBreak) {
            this.setMode('longBreak')
          } else {
            this.setMode('pomodoro')
          }

          break

        case 'shortBreak':
          this.pomodoro = false
          this.longBreak = false
          this.shortBreak = true
          this.time = 5 * 60

          break
        case 'longBreak':
          this.pomodoro = false
          this.longBreak = true
          this.shortBreak = false
          this.time = 15 * 60

          break

        default:
          this.pomodoro = true
          this.longBreak = false
          this.shortBreak = false
          this.time = 25 * 60

          break
      }

      localStorage.setItem(POMODORO_KEY, JSON.stringify(this))
    },
  })

export default usePomodoroStore
