import React from 'react';
import { Consumer as LangConsumer } from '../../contexts/lang';

export default (props) => {
  return (
    <LangConsumer>
      {(dict) => dict[props.children] || ''}
    </LangConsumer>
  )
}