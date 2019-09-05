import React from 'react';
import Image from './image';
import axios from 'axios';
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
      <div className="image-container">
        <Image url={url} className="image" />
        <div className="text-wrapper"> 
          <div className="title">{title}</div>
          <div className="desc">  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </div>
        </div>
      </div>
    );
  }
}

export default ImageDetails;
