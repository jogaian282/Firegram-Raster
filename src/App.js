import React, {useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImage={setSelectedImage}></ImageGrid>
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}></Modal> }
    </div>
  );
}

export default App;
