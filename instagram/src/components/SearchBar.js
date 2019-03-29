import React from "react";
import "./SearchBar.css";



let SearchBar = (props) => {
    return(
        <div className ="search">
            <div className = "logo">
                <img className="pic" src="https://cdn130.picsart.com/259430940027212.png?r1024x1024" alt ="ig-pic"/>

                <div className="split"></div>
                <img className="ig-logo" src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt="logo"/>

            </div>
            
            <form>
                <input
                    className=""
                    type="text"
                    value={props.users.username}
                    name="username"
                    placeholder="Search"
                    onChange={props.search} 
                />

            <button class="" onClick={props.updateSearch}>Search</button>
        </form>  

            <div className = "icons">
                <i className ="far fa-compass"></i>
                <i className = "far fa-heart"></i>
                <i className ="far fa-user"></i>
            </div>
        </div>
    )

}

export default SearchBar