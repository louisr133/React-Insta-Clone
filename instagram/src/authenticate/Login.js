import React from "react"
import UserData from "./UserData"

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            UserData: UserData,
            user: '',
            pass: '',
        }
    }

    handleUser = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })

    }
    handlePass = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })

    }

    isPair = (e) => {
        e.preventDefault();
        this.state.UserData.forEach(i => {
            if(i.username === this.state.user && i.password === this.state.pass){
                this.props.handleLogin();
               
            } 
        })

    }


    render(){

        return(
            <form>
                <input
                    className=""
                    type="text"
                    value={this.state.user}
                    name="user"
                    placeholder=" Username"
                    onChange={this.handleUser} 
                />
                <input
                    className=""
                    type="password"
                    value={this.state.pass}
                    name="pass"
                    placeholder=" Password"
                    onChange={this.handlePass} 
                />

            <button class="" onClick={this.isPair}>Login</button>
        </form>   
        )
    }

}

export default Login


