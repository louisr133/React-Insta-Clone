import React from "react";
import "./Comments.css"

let Comments = (props) => {

    return(
        <div class="com">
            <p class="comm"><span>{props.username}</span> {props.text}</p>
        </div>
       
        
    )

}

export default Comments