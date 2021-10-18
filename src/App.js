import React,{useState} from 'react';
import './index.css';
import Student from './User';
function App(){
    const [name, setName]=useState("Anil")
    return(
        <div className="App">
            
            
        
            
            
            <Student name={name}/>
          <button onClick= {()=>{setName("Narinder")}}>Update Name</button>
        </div>
    );
}


    
     

export default App;