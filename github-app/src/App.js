import React, {useState, useEffect}  from 'react';
import './App.css';
import Axios from 'axios';
import GlobalStyle from './styles/global'
import styled from 'styled-components'

import Header from './components/Header'
import Profile from './components/Profile'
import AppRouter from './AppRouter'

function App() {

  const [state, setState] = useState([])
  const [followers, setFollowers] = useState([])
  const [search, setSearch] = useState('')
  const [found, setFound] = useState('')

  useEffect(()=>{
      Axios.get('https://api.github.com/users/Brandon-Pampuch')
      .then(res =>{
        console.log(res.data)
        setState(res.data)
      }).catch(err =>{
        console.log(err)
      })
  },[])
  useEffect(()=>{
      Axios.get('https://api.github.com/users/Brandon-Pampuch/followers')
      .then(res =>{
        console.log("second-call",res.data)
        setFollowers(res.data)
      }).catch(err =>{
        console.log(err)
      })
  },[])
  useEffect(()=>{
      Axios.get(`https://api.github.com/users/${search}`)
      .then(res =>{
        console.log("search-call",res.data)
        setFound(res.data)
      }).catch(err =>{
        console.log(err)
      })
  },[])
//refactor above call as a custom hook

  const submitHandler = (follower) =>{
    setSearch(`${follower}`)
  }
console.log("followers",followers)
  return (
    <div className="App">
      <Header></Header>
      <Profile state={state}/>
      <AppRouter submitHandler={submitHandler} followers={followers} />
      <GlobalStyle></GlobalStyle>
    </div>
  );
}

export default App;
