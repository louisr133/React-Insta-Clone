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
        <div className="duh">
          <Postcontainer 
            class ="posted" 
            dummyData = {this.state.data} 
          />
        </div>
      </div>
    );
  }
}

export default App;
