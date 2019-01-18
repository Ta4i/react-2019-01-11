import React, {Component} from 'react';
import Comment from './comment';
import togglerElement from '../decorators/comments';

class CommentList extends Component{

        render() {
            const {isOpenComments, toggleOpenComments} = this.props
        return (
          <div>
              <button onClick={toggleOpenComments}>
                {isOpenComments ? 'closeComments' : 'openComments'}
              </button>
              {this.comments}
          </div>);

        }

    get comments() {
            const {
                comments, isOpenComments
            } = this.props;

              return (
                 <div>
                      <ul>
                      {comments && isOpenComments ?
                        comments.map((comment) =>
                          <li key={comment.id}>
                              <Comment comment={comment}/>
                          </li>)
                        : null}

                      </ul>
                  </div>

            );
        }

}

export default togglerElement(CommentList);
