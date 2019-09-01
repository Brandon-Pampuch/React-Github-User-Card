import React from 'react';
import { Route } from 'react-router-dom'

import List from './components/List'
import Followers from './components/Follower'
import Search from './components/Search'

const AppRouter = (props) => {

    const {followers, submitHandler} = props

    return ( 
        <div>
            <Route path = {'/search'} render={(props)=> <Search 
                                                        {...props}
                                                        submitHandler={submitHandler}
                                                        />}/>
            <Route exact path ={'/'}></Route>
            <Route path ={'/followers/:name'} render={(props)=> <Followers
                                                            {...props}
                                                        />}/>
            <Route exact path={'/followers'} render={(props)=> <List
                                                            {...props}
                                                            followers={followers}
                                                        />}/>
                                        
        </div>
     );
}
 
export default AppRouter;