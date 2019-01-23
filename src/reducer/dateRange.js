import { SELECT_RANGE } from '../constants'

export default ({ from, to } = { from: undefined, to: undefined }, action) => {
  const { type, payload } = action
  if (type === SELECT_RANGE) {
    const { range } = payload
    if (!range) return { from: undefined, to: undefined }
    from = range.from ? range.from : from
    to = range.to ? range.to : to
  }
  return { from, to }
}
