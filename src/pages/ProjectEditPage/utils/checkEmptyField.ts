export const checkEmptyField = <T>(
  fields: { category: string; data: T[] }[],
) => {
  return fields.some((field) => field.data.length === 0)
}
