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
                    className="addCom"
                    type="text"
                    value={props.text}
                    name="text"
                    placeholder="Add Comment..."
                    onChange={props.handleChanges} 
                />

            <button class="postButt" onClick={props.updateList}>Post</button>
        </form>   
        </div>
    )

}

export default CommentSection