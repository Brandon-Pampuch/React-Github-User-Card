import React, {useState, useEffect}  from 'react';
import './App.css';
import Axios from 'axios';
import GlobalStyle from './styles/global'


import Header from './components/Header'
import Profile from './components/Profile'
import AppRouter from './AppRouter'
import Card from './components/Card'

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
    console.log('yolo',search)
      Axios.get(`https://api.github.com/users/${search}`)
      .then(res =>{
        console.log("search-call",res.data)
        setFound(res.data)
        console.log('updated user',res.data)
      }).catch(err =>{
        console.log(err)
      })
  },[search])
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
      <Card follower={found}></Card>

    </div>
  );
}

export default App;
