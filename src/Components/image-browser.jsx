import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../css/image-browser.css';

// library.add(faComment);

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
