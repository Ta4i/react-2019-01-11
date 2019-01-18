import React, {PureComponent} from 'react'
import Select from 'react-select';

class Multiselect extends PureComponent {
    state = {
        selected: null
    }

    render() {
        return (
            <div style={{width: '300px'}}>
                <p>Multiselector</p>
                <Select
                    options={this.options}
                    value={this.state.selected}
                    onChange={this.handleSelectChange}
                    isMulti
                />    
            </div>
        )
    }
    handleSelectChange = (selected) => this.setState({selected})
  get options() {
      return this.props.articles.map(article => ({
          value: article.id,
          label: article.title
      }))
  }

}

export default Multiselect;