import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
display:flex;
justify-content:space-between;
padding: 10px;
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

    const {follower} = props
    
    return ( 
    <Container>
        <img src={follower.avatar_url} alt={follower.login}></img>
        <Link to={`/followers/${follower.login}`}><h1>{follower.login}</h1></Link>
     
    </Container> 
    );
}
 
export default Profile;