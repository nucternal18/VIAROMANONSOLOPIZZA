import React from 'react'
import UploadForm from '../components/UploadForm'

const GalleryAdmin = () => {
    return (
        <div >
            <h1 className="text-center text-5xl font-light mb-4">Pictures</h1>
            <p className="text-center mb-2">Load your latest Pictures</p>
            <UploadForm />
        </div>
    )
}

export default GalleryAdmin
