import React from "react";
import "./Comments.css"

let Comments = (props) => {

    return(
        <div className="com">
            <p className="comm"><span>{props.username}</span> {props.text}</p>
        </div>
       
        
    )

}

export default Comments