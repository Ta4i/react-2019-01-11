import {createContext} from 'react';
import { DEFAULT_LANGUAGE } from '../constants';
import texts from '../texts';
const {Provider, Consumer} = createContext({
    dict: texts[DEFAULT_LANGUAGE],
})

export {Provider, Consumer}