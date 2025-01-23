import { reactive } from 'vue'
import {
  validate,
  required,
  minLength,
} from '@/features/todos/composables/validation'

export const formData = reactive({
  name: '',
})

export const errors = reactive({});

export const validateField = async (field, value) => {
  switch (field) {
    case 'name':
      errors.name = validate(
        value,
        required,
        minLength(3),
      )
      break
  }
}

export const validateForm = () => {
  return Object.values(errors).some((error) => error)
}

export const resetForm = () => {
  Object.assign(formData, {
    name: '',
  })
}
