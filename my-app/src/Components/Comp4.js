import React from 'react'
import Comp5 from './Comp5';
class Comp4 extends React.Component {

    constructor() {
        super();
        console.log(this);
        this.state = {
            name: "React JS",
            age: 20
        };
    }

    myFunc() {
        this.setState({
            name: "Angular JS",
            age: 24,
        });
    }

    render() {
        console.log(this);

        return (
            <>
                <h1>Class Component</h1>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <button onClick={() => this.myFunc()}>Update</button>
                <Comp5 place="New York"></Comp5>        
            </>
        );
    }
}

export default Comp4;