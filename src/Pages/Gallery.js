import React, {useState} from 'react';
// import GalleryAdmin from './GalleryAdmin';
import ImageGrid from '../components/imageGrid';
import Modal from "../components/Modal";

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
      <div className="w-full flex flex-grow">
        <div className="container mx-auto">
          <h1 className="text-4xl text-center my-4">Galleria</h1>
          {/* <GalleryAdmin /> */}
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      </div>
    );
}

export default Gallery;
