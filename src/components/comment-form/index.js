import React, {Component} from 'react'
import {connect} from 'react-redux';
import  {addComment} from '../../ac'

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      user:
      <input
        value={this.state.user}
        onChange={this.handleChange('user')}
      />
      comment:
      <input
        value={this.state.text}
        onChange={this.handleChange('text')}
      />
      <input type='submit' value='отправить комментарий'/>
    </form>
    )    
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addComment(this.state)
    this.setState({user: '', text: ''})
  }

  handleChange = (type) => (ev) => {    
    const {value} = ev.target
    if(value) this.setState({[type]:value})
  }
}

export default connect (
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentForm)