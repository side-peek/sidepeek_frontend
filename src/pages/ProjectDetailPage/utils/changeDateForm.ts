const changeDateForm = (startDate: string, endDate: string) => {
  return `${startDate.slice(2).replace("-", ".")} ~ ${endDate.slice(2).replace("-", ".")}`
}

export default changeDateForm
