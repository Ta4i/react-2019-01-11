import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../ac'
	
class CommentForm extends Component {
	state = { user: '', text: ''}
	
	handleChange = e => {
	    const {name, value} = e.target
	    this.setState({
	        ...this.state,
            [name]: value
        })
    }
	
	handleAddBtnClick = e => {
       //don't need to reload the window
       e.preventDefault()
	   const {parentId} = this.props
	   this.props.dispatchAddComment({...this.state, parentId})
	 }
	
	render() {
	    const {user, text} = this.state
	    return (
            <div>
                <hr></hr>
                <form onSubmit={this.handleAddBtnClick}>
                    User: <input type='text' name='user' value={user} onChange={this.handleChange}/>
                    <br></br>
                    Comment: <div>
                        <textarea name='text' value={text} onChange={this.handleChange} />
                        </div>
                    <button type='submit'>Add comment</button>
                </form>
            </div>
	        )
	    }
	}
	
	CommentForm.propTypes = {
	    parentId: PropTypes.string.isRequired
	}
	
export default connect(
        null, 
        (dispatch) => ({
            dispatchAddComment: comment => {
                //console.log(comment)
                dispatch(addComment(comment))}
        })
	)(CommentForm)