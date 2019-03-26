import React from "react";
import Comments from "./Comments";

let CommentSection = (props) => {
    return(
        <div className="lll">
            {props.comments.map((i,index) => 
                <Comments 
                    username = {i.username}
                    text = {i.text}
                    key = {index}
                />
            )}
            {/* <input className="addCom" placeholder="Add Comment..."></input> */}
            <form>
                <input
                    className="addComm"
                    type="text"
                    value={props.text}
                    name="text"
                    placeholder="Add Comment..."
                    onChange={props.handleChanges} 
                />

            <button onClick={props.updateList}>Add To Item</button>
        </form>   
        </div>
    )

}

export default CommentSection