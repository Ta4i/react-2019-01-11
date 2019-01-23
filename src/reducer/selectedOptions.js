import { SELECT } from '../constants'

export default (selectedOptions = null, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT:
      return payload.options
    default:
      return selectedOptions
  }
}
