import { createContext } from 'react'
import texts from '../texts'

const { Provider, Consumer } = createContext(texts.en)

export { Provider, Consumer }