import React from 'react';
import './CommentSection.css';

const Comment = (props) => {
    return <div className='comment'>
        <strong className='username'>{props.comment.username}</strong>
        {props.comment.text}
    </div>
}

export default Comment;