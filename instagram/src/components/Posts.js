import React from "react";
import "./Posts.css"
import CommentSection from "./CommentSection"

class Posts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            thumbnailUrl: props.thumbnailUrl,
            username: props.username,
            imageUrl: props.imageUrl,
            likes: props.likes,
            comments: props.comments,
            
        }


        this.addLike = () => {
            this.setState({likes: this.state.likes+1})
        }

        this.handleChanges = event => {
            event.preventDefault();
            this.setState({
                [event.target.name]: event.target.value,
            });
          };
      
          

          this.updateList = event => {
            console.log(event)
            event.preventDefault();
            const comments = {
              username: this.state.username,
              text: this.state.text,
      
            };
      
            this.setState({
              comments: [...this.state.comments,comments]
            });
            // console.log(this.state.tdl);
          };

    }

    render(){

        return(
            <div className="posts">

                <div className="picUser">
                    <img src = {this.state.thumbnailUrl} alt="thumbnail"/>
                    <p className="username"><span>{this.state.username}</span></p>
                </div>
                    <img className="imgUrl" src = {this.state.imageUrl} alt="images"/>
                    <i className = "far fa-heart" onClick={this.addLike}></i><i className = "far fa-comment"></i>
                    <p className="comm">Liked by <span>{this.state.likes}</span> others </p>
                    {/* <p>{props.timestamp}</p> */}
                    
                    <CommentSection 
                        comments={this.state.comments}
                        handleChanges={this.handleChanges}
                        updateList={this.updateList}
                    />

            </div>
            
        )

    }


}


export default Posts