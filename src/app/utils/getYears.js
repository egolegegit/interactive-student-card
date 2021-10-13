import moment from "moment"

const getYears = (birthday) => {
  const endDate = moment().add('year', -16)
  const startDate = moment().add('year', -65)
  const isValidDate = new Date(birthday)

  console.log()



  return (
    !moment(endDate).isAfter(isValidDate) ||
    !moment(isValidDate).isAfter(startDate)
  )
}

export default getYears
