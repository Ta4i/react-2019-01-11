import React, {Component} from 'react'
import i18n from '../i18n'

class UserForm extends Component {
    
    render() {
        const {t} = this.props
        return (
            <div>
                {t('Username')}:
                <input value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = (event) => {
        event.preventDefault()
        this.props.onChange(event.target.value)
    }
}

export default i18n(UserForm)
