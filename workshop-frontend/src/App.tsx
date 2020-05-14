import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  
  const [consumers, setConsumers] = React.useState([] as any);

  React.useEffect(() => {
      axios.get(`${process.env.API_URL || 'http://localhost:9000'}` + '/consumer').then(response => {          
          console.log(response.data);
          setConsumers(response.data);
      })
  }, []);
  
  function addItemToConsumers(e: any) {    
    axios.post(`${process.env.API_URL || 'http://localhost:9000'}` + '/consumer').then(response => {          
      const consumer = response.data;
      setConsumers([...consumers, consumer]);
      toast( `Consumer created: ${consumer.name}`);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React with Typescript - Docker Workshop
        </p>
        <button
          onClick={addItemToConsumers}
          className="App-link"          
          style={{padding:'20px', background:'transparent', border:'none', fontSize:'1em', cursor:'pointer'}}>            
          Create new consumer credit line
        </button>
      <div className="container">               
          <div className="consumer-list">           
            <ul>
              {consumers.map((consumer: any) =>
                <li style={{listStyle:'none'}} key={consumer._id}>{consumer.name} - Credito: {consumer.credit}</li>
              )}
            </ul>
          </div>
      </div>
      </header>
      <ToastContainer />
    </div>
    
  );
}  

export default App;