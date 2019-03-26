import React from "react";
import Posts from "./Posts"
import CommentSection from "./CommentSection";


let PostContainer = (props) => {
    return(
        props.dummyData.map((i, index) => (
            <div class="duh">
                <Posts
                    username = {i.username}
                    thumbnailUrl= {i.thumbnailUrl}
                    imageUrl = {i.imageUrl}
                    timestamp ={i.timestamp}
                    likes = {i.likes}
                    comments={i.comments}
                    
                    key={index}
                />
                {/* <CommentSection comments={i.comments}/> */}
            </div>
            )
        )

    )

}

export default PostContainer