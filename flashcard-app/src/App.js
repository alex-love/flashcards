import React, { Component } from 'react';
import Home from './Home';
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
  }

  //kill interval if component unmounts
  componentWillUnmount(){
    console.log("component unmounted")
  }

  //don't need to bind because arrow function I think
  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data}))
      .catch((err) => {
        console.log(err)
      })
  };




  render() {
  /*   console.log("in the render")
    this.state.data.forEach((data)=> {
      let msg = `word: ${data.word} def: ${data.definition}  ${data.id} \n ${data}`
      console.log(msg)
    }) */
    return (
      <Home  data={this.state.data} />
    )
    

  }
}

export default App;
