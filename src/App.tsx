import React from 'react';
import ResizableImage from './ResizableImage'; // Adjust the path accordingly

const App = () => {
  const imageUrl = 'path/to/your/image.jpg'; // Replace with your image path

  return (
    <div>
      <h1>Resizable Image Component</h1>
      <ResizableImage imageUrl={imageUrl} />
    </div>
  );
};

export default App;
