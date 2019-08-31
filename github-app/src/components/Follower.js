import React, {useState,useEffect} from 'react';
import Axios from 'axios';

const Followers = (props) => {
    console.log('followers component',props)

    const [follower, setFollower] = useState([])

    useEffect(()=>{
        Axios.get(`https://api.github.com/users/${props.match.params.name}`)
        .then((res)=>{
            console.log(res)
            setFollower(res.data)
      
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return ( 
        <div>
            {
              follower && <div>
                            <h1>name: {follower.login}</h1> 
                            <p>bio: {follower.bio}</p>
                            <p>blog: {follower.blog}</p>
                            <p>email: {follower.email}</p>

                            
                          </div>
            }
        </div>
     
     );
}
 
export default Followers;

