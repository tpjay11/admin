import React from 'react';

class Button extends React.Component{
    constructor(props){
       super(props);
       this.state
    }
    componentWillUnmount(a,b){
        console.log(a,b)
    }
    componentWillReceiveProps(a,b){
        console.log(a,b)
    }
    render(){
        return (
            <button>Click!</button>
        )
    }
}

export default Button