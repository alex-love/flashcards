import React from 'react'
import CardText from './CardText'

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            word: "",
            definition: "",
            front: false,
        }
        this.nextCard = this.nextCard.bind(this);
        this.flipCard = this.flipCard.bind(this);
    }

    componentDidMount(){
        this.setState({
            word: this.props.data.word,
            definition: "This is my test definition",
        })
    }

    nextCard() {
        this.setState({
            word: "Another test word",
            definition: "another test definition"
        })
    }

    flipCard(){
        this.setState({
            front: !this.state.front,
        })
    }

    render(){
    

        return(
            <div class="card mb-4 shadow-sm">
          <div class="card-header">
          {this.state.front ?<h4 class="my-0 font-weight-normal">Word</h4> : <h4 class="my-0 font-weight-normal">Definition</h4> }
            
          </div>
          <div class="card-body">
          {this.state.front ? <CardText word={this.state.word} definition={this.state.definition}/> : <CardText word={null} definition={null} />}
            
            
            <button onClick={this.nextCard} type="button" class="btn btn-lg  btn-outline-primary">Next</button>
            <button onClick={this.flipCard} type="button" class="btn btn-lg  btn-outline-primary">Flip card</button>
          </div>
        </div>
        )
    }
}

export default Card