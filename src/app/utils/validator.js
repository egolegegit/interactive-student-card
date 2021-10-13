import getYears from "./getYears"

/* eslint-disable no-useless-escape */
export default function validator(data, config) {
  const errors = {}

  function validate(validateMethod, data, config) {
    let statusValidate

    switch (validateMethod) {
      case 'isRequired': {
        statusValidate = data.trim() === ''
        break
      }

      case 'isContainDigit': {
        const difitRegExp = /\d+/g
        statusValidate = !difitRegExp.test(data)
        break
      }

      case 'isLength': {
        statusValidate =
          data.length < config.value || data.length > config.value
        break
      }

      case 'isYears': {
        statusValidate = getYears(data)
          
        break
      }

      case 'isUrl': {
        const urlRegExp =
          /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim
        statusValidate = !urlRegExp.test(data)

        break
      }

      default:
        break
    }

    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )

      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }

  return errors
}
