import React from "react"

const loggedIn = Logged => NotLogged =>  props => {
    if(props.logged){
        return <Logged />
    } else {
        return <NotLogged handleLogin ={props.handleLogin} />
    }
}

export default loggedIn



