import {createContext} from 'react';

const {Provider, Consumer} = createContext({
    currentLang: ''
})

export {Provider, Consumer}
