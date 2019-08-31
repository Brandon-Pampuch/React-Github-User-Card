import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
display:flex;
justify-content:space-around;
margin: 29px auto;
border: 1px solid ${props => props.theme.colors.highlight};
border-radius: 5px;
width: 40%;
    img{
        width: 100px;
        margin: 10px;
        padding:10px;
    }
    button{
        border: 1px solid black;
        margin: 10px;
    }
`

const Profile = (props) => {

    const {state} = props
    
    return ( 
    <Container>
        <img src={state.avatar_url} alt={state.login}></img>
        <h1>{state.login}</h1>
        <Link to={'/followers'}><button>followers</button></Link>
    </Container> 
    );
}
 
export default Profile;