import React from 'react'
import Card from './Card'

class Home extends React.Component{

    
    render(){
    const {data,word} = this.props
        return(
    <div>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Alex's Notecard App</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="#">Nav1</a>
        <a className="p-2 text-dark" href="#">Nav2</a>
        <a className="p-2 text-dark" href="#">Nav3</a>
        <a className="p-2 text-dark" href="#">Nav4</a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign up</a>
    </div>

    

    <div class="container">
      <div class="card-deck mb-3 text-center">
        <Card  data={data} word={word}/>
      </div>

    </div>
    </div>
        )
    }
}

export default Home;