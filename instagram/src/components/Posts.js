import React from "react";
import "./Posts.css"
import CommentSection from "./CommentSection"

let Posts = (props) => {

    return(
        <div className="posts">

            <div className="picUser">
                <img src = {props.thumbnailUrl} alt="thumbnail"/>
                <p class="username"><span>{props.username}</span></p>
            </div>
                <img class="imgUrl" src = {props.imageUrl} alt="images"/>
                <i className = "far fa-heart"></i><i className = "far fa-comment"></i>
                <p class="comm">Liked by <span>{props.likes}</span> others </p>
                {/* <p>{props.timestamp}</p> */}
                
                {props.comments.map(i => {
                    // console.log(i);
                    return <CommentSection comments={props}/>
                })
                }
        </div>
        
    )

}

export default Posts