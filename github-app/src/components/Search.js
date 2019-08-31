import React from 'react';

class Search extends React.Component {
    state = { 
        search: ""
     }

    textChangeHandler = (e) =>{

    }

    render() { 
        return ( 
            <div>
                <form onSubmit={()=>{}}>
                    <input
                    type='text'
                    name='serach'
                    placeholder='search'
                    value={this.state.search}
                    onChange={()=>{}}
                    >
                    </input>
                </form>
            </div>
         );
    }
}
 
export default Search;


