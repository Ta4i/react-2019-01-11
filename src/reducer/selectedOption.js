import { SELECT } from '../constants'

export default (selectedOption = null, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT:
      return payload.option
    default:
      return selectedOption
  }
}
