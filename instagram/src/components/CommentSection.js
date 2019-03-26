import React from "react";
import Comments from "./Comments";

let CommentSection = (props) => {
    console.log(props.comments);
    return(
        <div className="lll">
            {props.comments.comments.map((i,index) => 
                <Comments 
                    username = {i.username}
                    text = {i.text}
                    key = {index}
                />
            )}
        </div>
    )

}

export default CommentSection