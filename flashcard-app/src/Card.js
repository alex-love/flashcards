import React from 'react'
import CardText from './CardText'

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            word: "default",
            definition: "default definition",
            front: false,
            index: 0,
        }
        this.nextCard = this.nextCard.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.randomCard = this.randomCard.bind(this);
    }

    componentDidMount(){
        this.setState({
            word: "Test word",
            definition: "This is my test definition",
        })
    }

   /*  nextCard() {
        this.setState({
            word: "Another test word",
            definition: "another test definition"
        })
    } */

    flipCard(){
        this.setState({
            front: !this.state.front,
        })
    }

    randomCard() {
        const { data } = this.props;
        let index = Math.floor(Math.random() * 499);
        let newWord = data.find((data)=> {
            console.log(data);

            return data.id === index;
        })
        let newDef = data.find((data)=> {
            console.log(data);

            return data.id === index;
        })
        // update state
        this.setState({
            word: newWord.word,
            definition: newDef.definition,
        });
    };
    
    nextCard() {
        const { data } = this.props;
        let newWord = data.find((data,index)=> {
            console.log(data.word);
            return data.id === this.state.index;
        })
        let newDef = data.find((data,index)=> {
            console.log(data);
            return data.id === this.state.index;
        })
        console.log(newDef);
        let index = this.state.index + 1;
        // update state
        this.setState({
            word: newWord.word,
            definition: newDef.definition,
            index: index,
        });
    };

    render(){
/*         const {data} = this.props;
 */        return(
            <div className="card mb-4 shadow-sm">
          <div className="card-header">
          {this.state.front ?<h4 className="my-0 font-weight-normal">Word</h4> : <h4 className="my-0 font-weight-normal">Definition</h4> }
            
          </div>
          <div className="card-body">
          {this.state.front ? <CardText word={this.state.word} /> : <CardText word={this.state.definition}  />}
            
            
            <button onClick={this.nextCard} type="button" className="btn btn-lg mr-2  btn-outline-primary">Next</button>
            <button onClick={this.flipCard} type="button" className="btn btn-lg mr-2 btn-outline-primary">Flip</button>
            
          </div>
        </div>
        )
    }
}

export default Card