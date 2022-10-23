import './App.css';
import {db} from 'firebase.js';
import { useEffect, useState } from 'react';
import Header from 'Header';




function App() {
  const [user, useState] = useState();

useEffect(()=>{

},[])


  return (
    <div className="App">


<Header setuser={setuser} user={user}></Header>


 </div>
  );
}


export default App;
