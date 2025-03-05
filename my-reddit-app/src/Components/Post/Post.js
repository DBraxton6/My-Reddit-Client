import React from 'react';
import './Post.css';
import { formatTimeAgo } from '../../utils/formatTimeAgo';
import { formatNumber } from '../../utils/formatNumber';
import { FaRegCommentAlt } from "react-icons/fa";
import Voting from '../Voting/Voting';

const Post = ({ post }) => {
    
    // Function to check if the media is an image
    const isImage = (url) => {
        return url.match(/\.(jpeg|jpg|gif|png|bmp|webp)$/) != null;
    }
    
    return (
        <div className='post-container'>
            <Voting initialVoteScore={post.vote_score} />
            <div className='post-content'>
                <div className="post-header">
                    <h3>{post.title}</h3>
                    <span className='post-subreddit'>r/{post.subreddit}</span>
                </div> 
                {post.media && isImage(post.media) && (
                    <img src={post.media} alt='Post media' className='post-media' />
                )}
                <div className='horizontal-line'></div>
                <div className='post-details'>
                    <span className="post-author">{post.author}</span>
                    <span className="post-created">{formatTimeAgo(post.created)}</span>
                    <div className='post-comments'>
                        <FaRegCommentAlt className='icon comment-icon' />
                        <span className='comment-count'>{formatNumber(post.comment_count)}</span>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Post;