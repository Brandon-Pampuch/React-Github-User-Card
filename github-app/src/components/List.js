import React from 'react';
import Card from './Card'

const List = ({followers}) => {
    return ( 
    <div>
        {
            followers.map(follower => <Card follower={follower}></Card>)
        }
    </div> 
    );
}
 
export default List;