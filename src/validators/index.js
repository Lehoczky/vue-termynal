import { SPINNERS } from "../data/spinners"

export const spinnerTypeValidator = value => {
  const availableTypes = Object.keys(SPINNERS)
  return availableTypes.includes(value)
}
