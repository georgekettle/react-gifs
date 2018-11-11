import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.clickEvent) {
      this.props.clickEvent(this.props.id);
    }
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" id={this.props.id} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
