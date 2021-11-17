
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
function Post({displayName,username,text,image,avatar
}) {
    return ( 
        <div className="postf">
           <div className="post-avatar" >
               <Avatar src="https://cdn4.vectorstock.com/i/thumb-large/48/73/teamwork-people-around-circle-vector-884873.jpg" />
           </div>
<div className="post-body">
    <div className="post-header">
        <div className="post-headerText">
            <h3>
                Manil Shrestha
            </h3>
        </div>
        <div className="post-headerDescription">
            <p>Hey lets bulild something new</p>
        </div>
    </div>
    <img src="https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
    <div className="post-footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
</div>
</div>
    ) ;     
    
}

export default Post
