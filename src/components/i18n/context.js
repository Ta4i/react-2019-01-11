import {createContext} from 'react'
import dictionaries from '../../dictionaries/language-dictionary.js'
export const {Provider, Consumer} = createContext(dictionaries.en)