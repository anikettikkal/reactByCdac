import React,{Component} from 'react';

class Comp6 extends Component {

    constructor(){
        super();
        this.state={age:30}
    }

    componentDidMount(){
        console.log("Component Mounted",this.state.age);
    }

    componentWillUnmount(){
        console.log("Component Unmount");
    }

    componentDidUpdate(){
        console.log("Component Updated",this.state.age);
        
    }

    myFunc=()=>{
        this.setState({age:this.state.age + 1});
    }

    render() {
        return (
            <>
            <h1>Life Cycle</h1>
            <p>{this.state.age}</p>
            <button onClick={()=>{
                this.myFunc();
            }}>
                Click Me !
            </button>
            </>
        );
    }
}

export default Comp6;