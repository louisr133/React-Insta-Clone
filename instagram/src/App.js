import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar"
import Postcontainer from "./components/PostContainer"
import dummyData from "./dummy-data"


class App extends Component {
  constructor(){
    super()

    this.state = {
      data: [],
      username: '',
    };
  }

  handleSearch = (e) => {
     
    this.setState({
     username: e.target.value,
    })

    
}

  updateSearch = (e) =>{
  e.preventDefault();
  if(this.state.username === ""){
    this.setState({
      data: dummyData,
    })
  } else {
     this.setState({
      data: dummyData.filter(user => user.username.includes(this.state.username) === true ),
    });
  }
}    

  componentDidMount(){
    this.setState({data: dummyData});
  }

  render() {
    return (
      <div className="App">
        
        <SearchBar 
          search={this.handleSearch}
          users={this.state.data}
          updateSearch={this.updateSearch}
        />

        <div className="duh">

          <Postcontainer 
            class ="posted" 
            dummy = {this.state.data} 
          />

        </div>

      </div>
    );
  }
}

export default App;
