import  React from 'react';

const Comment = (props) => {
    return (
        <div>
            <h3>{props.user}</h3>
            <p>{props.text}</p>
        </div>
    );
};

export default Comment;