import React, { Component } from 'react';

class CreateQuiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            pickedVal : '',
        }
    }

    componentDidMount(){
        this.fetchOptionS()
    }

    fetchOptionS() {
        fetch('http://localhost:5000/quiz')
        .then((res) =>{
            return res.json();
        }).then((json)=> {
            values = json;
            this.setState({option})
        });
    }
    
    render() {
        return (
            <div className="dropdown">
            <select>
                {this.state.options.map((option,key)=> <option key={key} value={option}></option>)}
            </select>
          </div>
        );
    }
}
export default CreateQuiz;