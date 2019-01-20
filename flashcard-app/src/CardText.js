import React from 'react'

class CardText extends React.Component {
    render(){
    const {word} = this.props;
        return(
            <h1 className="card-title ">{word}</h1>    
        )
    }
}

export default CardText;