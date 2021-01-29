import React, { Component } from 'react';

class CategoryQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {dataCategory:[]}
    }

    componentDidMount(){
        fetch('https://github.com/')
        .then(response => response.json())
        .then(data => {
            this.setState({dataCategory: data})
        });
    }

    render() {
        return(
            <div>
               {this.state.dataCategory.app((category)=>{
                   return <p>{category.type}</p>
               })}
            </div>
        );
    }
}
export default CategoryQuiz;