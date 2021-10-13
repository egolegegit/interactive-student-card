const getAge = (birthday) => {
  const nowDate = new Date()
  const yearBirthday = new Date(birthday)

  return nowDate.getYear() - yearBirthday.getYear()
}
export default getAge
