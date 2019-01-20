import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(prosp);
        this.state = {
            word:'',
            definition,
        }    
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    }

    handleWordChange(event){
        this.setState({
                word: event.target.value
        })
    }

    handleDefinitionChange(event){
        this.setState({
            definition: event.target.value
        })
    }

    render(){
        return(
            <form>
                <label>
                    Word:
                    <input type="text" value={this.state.value}/>
                </label>
            </form>
        )
    }
}