import React, {Component} from 'react'
import {connect} from 'react-redux';
import {addComment} from '../../ac';

class CommentForm extends Component {
   state = {
      user: '',
      text: ''
   }
   render() {
      return (
         <form onSubmit={this.saveComment}>
            <h4>Add Comments</h4>
            <div>
               <input
                  name="user"
                  placeholder='name'
                  onChange={this.changeValue}
               />
               <textarea
                  name="comment"
                  placeholder='comment'
                  onChange={this.changeValue}
               />
            </div>
            <button>Submit</button>
         </form>
      )
   }
   changeValue = (e) =>{
      e.preventDefault()
      const {name, value} = e.target
      if (name === 'user') {this.setState({user: value})}
      if (name === 'comment') {this.setState({text: value})}
   }

   saveComment = (e) =>{
      e.preventDefault()
      const data = {
         user: this.state.user,
         text: this.state.text
      }
      if(data.user.length === 0 || data.text.length === 0) return null
      this.props.addCommentToList(data)
   }
}

export default connect(
   null,
   (dispatch) => ({
      addCommentToList: (data) => dispatch(addComment(data))
   })
)(CommentForm)
