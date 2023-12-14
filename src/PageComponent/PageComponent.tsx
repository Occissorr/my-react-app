import React from 'react';
import { Resizable } from 'react-resizable';

const ResizableImage = ({ imageUrl }) => {
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);

  const onResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Resizable
      width={width}
      height={height}
      onResize={onResize}
      style={{
        overflow: 'hidden',
        border: '1px solid #ccc',
        margin: '20px',
      }}
    >
      <img
        src={imageUrl}
        alt="Resizable Image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Resizable>
  );
};

export default ResizableImage;
