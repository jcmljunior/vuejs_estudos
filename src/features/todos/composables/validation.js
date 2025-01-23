export const required = (value) => {
  return value ? "" : "Este campo é obrigatório."
}

export const email = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value) ? "" : "Por favor, insira um e-mail válido."
}

export const minLength = (min) => {
  return (value) => {
    return value.length >= min
      ? ""
      : `Este campo deve ter pelo menos ${min} caracteres.`
  }
}

export const maxLength = (max) => {
  return (value) => {
    return value.length <= max
      ? ""
      : `Este campo deve ter no máximo ${max} caracteres.`
  }
}

export const numeric = (value) => {
  const numericRegex = /^[0-9]+$/
  return numericRegex.test(value) ? "" : "Este campo deve conter apenas números."
}

export const alphaNumeric = (value) => {
  const alphaNumericRegex = /^[0-9a-zA-Z\s]+$/
  return alphaNumericRegex.test(value) ? "" : "Este campo deve conter apenas caracteres alfanumericos."
}

export const alpha = (value) => {
  const alphaRegex = /^[a-zA-Z\s]+$/
  return alphaRegex.test(value) ? "" : "Este campo deve conter apenas caracteres alfabéticos."
}

export const validate = (value, ...rules) => {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }

  return "";
};
