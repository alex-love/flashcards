import React from 'react'

class CardText extends React.Component {
    render(){
    const {data,word} = this.props;
        return(
            <h1 class="card-title pricing-card-title">{word}</h1>    
        )
    }
}

export default CardText