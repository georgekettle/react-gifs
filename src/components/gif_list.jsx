import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  constructor(props) {
    super(props);
  }

  renderList = () => {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} clickEvent={this.props.select}/>;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
