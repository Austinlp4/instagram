import React from 'react';
import './CommentSection.css';
import Comment from './Comment';

const CommentSection = (props) => {
    return <div>
            {props.comments.map(comment => <Comment key={comment.username} comment={comment}/>)}
        </div>
}

export default CommentSection;