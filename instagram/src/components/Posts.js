import React from "react";

let Posts = (props) => {

    return(
        <div>
            <p>{props.username}</p>
            <img src = {props.thumbnailUrl} alt="thumbnail"/>
            <img src = {props.imageUrl} alt="images"/>
            <p>{props.likes} <i className = "far fa-heart"></i> </p>
            <i className = "far fa-comment"></i>
            <p>{props.timestamp}</p>
        </div>
    )

}

export default Posts