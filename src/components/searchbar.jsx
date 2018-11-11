import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return(
      <input type="text" placeholder="Search Gifs" className="form-search" onChange={this.handleUpdate}/>
    );
  }
}

export default Search;
