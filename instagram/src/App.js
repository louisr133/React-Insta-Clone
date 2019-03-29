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
      search: '',
    };
  }

  handleSearch = (e) => {
     
    this.setState({
     search: e.target.value,
    })

  }

  updateSearch = (e) =>{
    e.preventDefault();
    if(this.state.search === ""){
      this.setState({
        data: dummyData,
      })
    } else {
      this.setState({
        data: dummyData.filter(user => user.username.includes(this.state.search) === true ),
      });

    }

}    

  componentDidMount(){
    this.setState({
      data: dummyData,
    });
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
