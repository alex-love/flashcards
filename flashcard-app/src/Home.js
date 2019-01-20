import React from 'react'
import Card from './Card'

class Home extends React.Component{

    
    render(){
    const {data} = this.props
        return(
    <div>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Alex's  App</h5>
    </div>

    

    <div className="container">
      <div className="card-deck mb-3 text-center">
        <Card data={data}/>
      </div>

    </div>
    </div>
        )
    }
}

export default Home;