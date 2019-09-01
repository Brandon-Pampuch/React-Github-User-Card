import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props)
    this.state = { 
        search: ""
     }
    }
    fireSubmit = (e) =>{
        e.preventDefault()
        this.props.submitHandler(this.state.search)
    }
    textChangeHandler = (event) =>{
        console.log(event.target.value)
        this.setState({...this.state, search: event.target.value})
    }


    render() { 
        return ( 
            <div>
                <form onSubmit={(e)=>{this.fireSubmit(e)}}>
                    <label htmlFor='search'>enter login name </label>
                    <input
                    type='text'
                    name='search'
                    placeholder='search'
                    value={this.state.search}
                    onChange={this.textChangeHandler}
                    >
                    </input>
                    <button type='submit'>search</button>
                </form>
            </div>
         );
    }

}
 
export default Search;


