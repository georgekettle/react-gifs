import React, { Component } from 'react';
import Search from "./searchbar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";

import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { gifs:[], selectedGifId:'3o7abKhOpu0NwenH3O', highlightedGif: '3o7abKhOpu0NwenH3O'};
  }

  search = (query) => {
    giphy('n3whGqUR2G1O1KmxJbDT656i2AtiY7t2').search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, res) => {
      console.log(res.data);
      this.setState({
        gifs: res.data,
      });
    });
  }

  selectGif = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} select={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
