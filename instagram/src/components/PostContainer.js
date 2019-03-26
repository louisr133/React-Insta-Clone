import React from "react";
import Posts from "./Posts"
import "./Posts.css"


let PostContainer = (props) => {
    return(
        props.dummyData.map((i, index) => (
                <Posts
                    username = {i.username}
                    thumbnailUrl= {i.thumbnailUrl}
                    imageUrl = {i.imageUrl}
                    timestamp ={i.timestamp}
                    likes = {i.likes}
                    comments={i.comments}
                    key = {index}
                />
            )
        )

    )

}

export default PostContainer