export const validation = {
  agreeToTerms: "Пожалуйста, согласитесь с правилами и условиями",
  email: "Email должен соответствовать формату example@example.com",
  phone: "Неверный формат номера телефона",
  password: {
    maxLength: "Максимальное количество символов 20",
    minLength: "Минимальное количество символов 6",
    mustContain: "Пароль имеет недопустимые символы",
    noWhiteSpace: "Использование пробелов запрещено",
  },
  passwordsMatch: "Пароли должны совпадать",
  requiredField: "Обязательное поле",
  userName: {
    allowedSymbols:
      "Имя пользователя может содержать символы: 0-9, A-Z, a-z, _ или -.",
    maxLength: "Максимальное количество символов 30",
    minLength: "Минимальное количество символов 6",
  },
};