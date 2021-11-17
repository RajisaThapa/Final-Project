import React from 'react'
import "./PostBox.css";
import {Avatar, Button } from "@material-ui/core";

function PostBox() {
    return (
        <div className="postBox">
            <form>
                <div className="postBox-input">
<Avatar src ="https://cdn4.vectorstock.com/i/thumb-large/48/73/teamwork-people-around-circle-vector-884873.jpg"></Avatar>
<input placeholder=" What's in your mind?"></input>

</div>

<Button className="postbutton">Post</Button>
            </form>
            
        </div>
    )
}

export default PostBox
