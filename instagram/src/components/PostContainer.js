import React from "react";
import Posts from "./Posts"
import "./Posts.css"


let PostContainer = (props) => {
    return(
        props.dummy.map((i, index) => (
            <div className="duh">
                <Posts
                    username = {i.username}
                    thumbnailUrl= {i.thumbnailUrl}
                    imageUrl = {i.imageUrl}
                    timestamp ={i.timestamp}
                    likes = {i.likes}
                    comments={i.comments}
                    key = {index}
                />
                {/* <CommentSection comments={i.comments}/> */}
            </div>
            )
        )

    )

}

export default PostContainer