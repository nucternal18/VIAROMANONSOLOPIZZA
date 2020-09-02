import React, {useState, useContext} from 'react';
import GalleryAdmin from './GalleryAdmin';
import ImageGrid from '../components/imageGrid';
import Modal from "../components/Modal";

//context
import { AuthContext } from "../context/authContext";

const Gallery = () => {
  const [ selectedImg, setSelectedImg ] = useState(null);
  const authContext = useContext(AuthContext);

  const {  isAuthenticated } = authContext;
    return (
      <section className="w-full flex flex-grow overflow-scroll">
        <div className="container mx-auto">
          <h1 className="text-4xl text-center my-4">Galleria</h1>
          {isAuthenticated && <GalleryAdmin /> }
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      </section>
    );
}

export default Gallery;
