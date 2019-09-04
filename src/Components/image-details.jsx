import React from 'react';
import Image from './image';
import axios from 'axios';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/image-details.css';


const URL = 'http://axielldevtest.eastus2.cloudapp.azure.com:3000/api/media';

class ImageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      imageId: '',
      title: '',
      url: '',
      thumbnailUrl: '',
    };
  }

  componentDidMount() {
    axios.get(`${URL}/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          tags: response.data.tags,
          imageId: response.data._id,
          title: response.data.title,
          url: response.data.url,
          thumbnailUrl: response.data.thumbnailUrl,
        });
      });
  }

  render() {
    console.log(this.state)
    const {
      title,
      url,
    } = this.state;
    return (
      <div>
        <Image url={url} />
        <span className="title">
          {title}
        </span>
      </div>
    );
  }
}

export default ImageDetails;
