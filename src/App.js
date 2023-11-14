import React from "react";

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {title: 'Coucou les amis'}
    }
    render() {
        return <h1 className="text-center text-500 text-3xl !important ">{this.state.title}</h1>;
    }
}

export default App;