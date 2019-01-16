import React, {PureComponent} from 'react';
import visibles from '../decorators/visibles';

class Comments extends PureComponent {
    render() {
        const {comments, isVisible, setVisible} = this.props
        return <div>         
           <button onClick={setVisible}>
            {isVisible ? 'close' : 'open'}
          </button>
          {comments && isVisible ?  
            comments.map((comment) =>  
              <div key={comment.id}>
                <h4>{comment.user}:</h4>
                <p>"{comment.text}"</p>             
              </div>)            
            : null}
        </div> 
    }
}

export default visibles(Comments)

