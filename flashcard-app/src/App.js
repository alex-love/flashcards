import React, { Component } from 'react';
import Home from './Home';
import axios from 'axios';
var fs = require("fs");
class App extends Component {

  state ={
    data:[],
    id: 0,
    word: null,
    definition: null,
    intervalIsSet: false,

  }

  //when component mounts, fetch all existing data into state
  componentDidMount(){
    this.getDataFromDb();
    if(!this.state.intervalIsSet){
      let interval = setInterval(this.getDataFromDb,10000);
      this.setState({intervalIsSet: interval});
    }
  }

  //kill interval if component unmounts
  componentWillUnmount(){
    if(this.state.intervalIsSet){
      clearInterval(this.state.intervalIsSet);
      this.setState({intervalIsSet: null});
    }
  }

  //don't need to bind because arrow function I think
  getDataFromDb = () => {
    fetch("/api/getDate")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data}))
      .catch((err) => {
        console.log(err)
      })
  };




  render() {
    return (
      <Home  data={this.state.data} />
    )
    

  }
}

export default App;
