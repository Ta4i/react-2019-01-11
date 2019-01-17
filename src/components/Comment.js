import React, {PureComponent} from 'react'


class Comment extends PureComponent {
    

    render() {
        const {        
            user,        
            text    
        } = this.props;
       return <div>
           <div>{user}</div> 
           <div>{text}</div>
       
       </div>
    }
    


}

export default Comment
