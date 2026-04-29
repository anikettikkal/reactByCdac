import React from 'react';

class Comp5 extends React.Component {

    myFunc() {
        console.log("Button Clicked");
    }

    render() {
        return (
            <>
                <div>Comp5 - {this.props.place}</div>

                <button onClick={() => this.myFunc()}>
                    Click Me
                </button>
            </>
        );
    }
}

export default Comp5;