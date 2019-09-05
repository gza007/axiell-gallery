import React from 'react';

const imgStyle = {
  height: '500px',
  width: '500px',
};

const Image = ({ url }) => {
  return (
    <div className="image">
      <img src={url} style={imgStyle} alt={''} />
    </div>
  );
};

export default Image;
