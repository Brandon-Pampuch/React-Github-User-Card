import React, {useState, useEffect}  from 'react';
import './App.css';
import Axios from 'axios';
import List from './components/List'
import Card from './components/List'

function App() {

  const [state, setState] = useState([])

  useEffect(()=>{
      Axios.get('https://api.github.com/users/Brandon-Pampuch')
      .then(res =>{
        console.log(res.data)
        //set state
      }).catch(err =>{
        console.log(err)
      })
  },[])


  return (
    <div className="App">

    </div>
  );
}

export default App;
