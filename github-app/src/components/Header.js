import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = styled.nav`
display:flex;
margin: 20px auto;
justify-content:space-around;
text-decoration:none;
color:black;
width:50%;
    a {
        text-decoration:none;
        color: black;
    }

`

const Header = (props) => {
    return ( 
        <div>
            <Navigation>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/Search'}><li>Search</li></Link>
        
            </Navigation>
        </div>
     );
}
 
export default Header;