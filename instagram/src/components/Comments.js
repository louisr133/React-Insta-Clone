import React from "react";

let Comments = (props) => {

    return(
        <div>
            <p>{props.username}</p>
            <p>{props.text}</p>
        </div>
       
        
    )

}

export default Comments