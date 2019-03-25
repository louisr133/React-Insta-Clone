import React from "react";
import Comments from "./Comments";

let CommentSection = (props) => {
    return(
        props.comments.map((i,index) => 
            <Comments 
                username = {i.username}
                text = {i.text}
                key = {index}
            />
        )
    )

}

export default CommentSection