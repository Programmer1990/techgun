
import './index.css';
import Student from './User';
function App(){
    return(
        <div className="App">
            
            
        
            
            
            <Student name={"Anil"}Email={"programmer.narinder.singh@gmail.com"} other={{address: "Auckland",mobil:"0226439345"}}/>
            <Student name={"peter"}Email={"programmer.peter.singh@gmail.com"} other={{address: "Wellington",mobil:"0226439346"}}/>
            <Student name={"Mark"}Email={"programmer.Mark.singh@gmail.com"} other={{address: "Te Puke",mobil:"0226439456"}}/>
        </div>
    );
}


    
     

export default App;