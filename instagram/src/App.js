import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar"
import Postcontainer from "./components/PostContainer"
import dummyData from "./dummy-data"


class App extends Component {
  constructor(){
    super()

    this.state = {
      data: dummyData,
    };



  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <Postcontainer 
          class ="posted" 
          dummyData = {this.state.data} 
        />
      </div>
    );
  }
}

export default App;
