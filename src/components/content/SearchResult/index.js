import React, { Component } from 'react';
import VideoCard from './VideoCard/VideoCard';
import { Link } from 'react-router-dom';

import '../../../css/sideBar.css';
import { searchVideos } from '../../../api/service';
// import { dataSearchVideo } from '../../../__mocks__/mockSearchVideo';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidMount() {
    // const vidsWithoutChannel = dataSearchVideo.items
    //   .filter((item) => item.id.kind === "youtube#video");
    // this.setState({ data: vidsWithoutChannel });
    const {
      params: { searchParam },
    } = this.props.match;

    searchVideos(searchParam).then((data) => {
      console.log(data.items);
      this.setState({ data: data.items });
    }).catch(error => this.setState({error: error}))
  }

  render() {
    const { data } = this.state;

    if (data.length < 1) return (<div>Loading...</div>)

    return (
      <div>
        {data.map((item) => (
          <Link className="thumbnail-card" key={item.etag} to={{
            pathname: `/watch/${item.id.videoId}`,
            state: { data: data }
          }}><VideoCard video={item} /></Link>
        ))}
      </div>
    );
  }
}

export default SearchResult;
