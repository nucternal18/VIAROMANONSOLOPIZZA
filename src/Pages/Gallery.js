import React from 'react';
import GalleryAdmin from './GalleryAdmin';
import ImageGrid from '../components/imageGrid';

const Gallery = () => {
    return (
        <div className="w-full flex flex-grow">
            <div className="container mx-auto">
                <h1 className="text-4xl text-center my-4">Galleria</h1>
                {/* <GalleryAdmin /> */}
                <ImageGrid />
            </div>
        </div>
    )
}

export default Gallery;
