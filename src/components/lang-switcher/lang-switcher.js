import React from 'react';
import { LANGUAGES } from '../../constants';
import T from '../translate';

export default class LangSwitcher extends React.Component {
  handleInputChange = (e) => {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <form>
        <T>choose-language</T>
        {Object.values(LANGUAGES).map(lang =>
          <label key={lang}>
            <input
              type="radio"
              name="lang"
              checked={this.props.value === lang}
              value={lang}
              onChange={this.handleInputChange}
            />
            {lang}
          </label>
        )}
      </form>
    );
  }
}