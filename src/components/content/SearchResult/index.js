import React, { Component } from 'react';
import VideoCard from './VideoCard/VideoCard';
import { Link } from 'react-router-dom';

import '../../../css/sideBar.css';
import { searchVideos } from '../../../api/service';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidMount() {
    const {
      params: { searchParam },
    } = this.props.match;

    // Bug na requisição da API
    searchVideos(searchParam).then(({ items }) => {
      this.setState({ data: items });
    });
  }

  render() {
    const { data } = this.state;
    if (data.length < 0) return (<div>Loading...</div>)
    return (
      <div>
        {
          data
            .filter((el, index) => index > 0)
            .map((item) => (
              <Link className="thumbnail-card" key={item.etag} to={{
                pathname: `/watch/${item.id.videoId}`,
                state: { data: data }
              }}><VideoCard video={item} /></Link>
            ))
        }
      </div>
    );
  }
}

export default SearchResult;
