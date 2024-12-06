import { SPINNERS } from "../data/spinners"

export const spinnerTypeValidator = (value: string): boolean => {
  const availableTypes = Object.keys(SPINNERS)
  return availableTypes.includes(value)
}
