import React,{ Component } from 'react';
import './index.css';
import User from './User';
class App extends Component{
    constructor(){
        super();
        this.state={
            data:"Singh"
        }
    }
    apple(){
        this.setState({data:"Narinder"})
    }
render()
{
    return(
        <div className="App">
            <h1> Hello world!</h1>
            <h1> {this.state.data}</h1>
            <button onClick={()=>this.apple()}> Update Data</button>
             
            <User/>
        </div>
    );
}
}

    
     

export default App;