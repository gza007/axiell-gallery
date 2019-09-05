import React from 'react';
import { Link } from 'react-router-dom';
import '../css/image-browser.css';

const ImageBrowser = (props) => {
  return (
    <div className="image-grid">
      {props.images.map(image => {
        return (
          <Link
            to={`/image/${image._id}`}
            key={image._id}
          >
            <div className="thumbnail-image">
              <div className="image-frame">
                <img src={image.thumbnailUrl} alt={''}/>
              </div>
              <div className="thumbnail-title">
                <span>
                  {image.title}
                </span>
              </div>
            </div>  
          </Link>
        );
      })}
    </div>
  );
};

export default ImageBrowser;
