import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import like from './like-comment.png';

const Post = (props) => {
   return (
    <div className='post'>
        <div className='post-header'>
        <img className='post-thumbnail' src={props.post.thumbnailUrl} alt=''></img>
           <h2>{props.post.username}</h2>         
        </div>
            <div className='post-content'>
                <img src={props.post.imageUrl}></img>
            </div>   
        <div className='comment-section'>
            
                <img className='likes' src={like} />
                <h3><strong>{props.post.likes} likes </strong></h3>
                <CommentSection comments={props.comments} className='comment-area'/>
            
        </div>
    </div>
   );
}

export default Post;