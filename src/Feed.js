import React from 'react';
import "./Feed.css";
import Header from './Header';
import Post from './Post';
import PostBox from './PostBox';

function Feed() {
    return (
        <div className="feed">
            
            
            <Header/>
          <PostBox/>
          <Post/>

        </div>
    )
}

export default Feed
