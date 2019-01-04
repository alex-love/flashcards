import React from 'react'

class CardText extends React.Component {
    render(){
    const {text} = this.props;
        return(
            <h1 class="card-title pricing-card-title">{text}</h1>    
        )
    }
}

export default CardText