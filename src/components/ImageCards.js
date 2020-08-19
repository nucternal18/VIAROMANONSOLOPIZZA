import React from 'react'

const ImageCards = ({ image }) => {

    return (
    <div className=" h-48 shadow-lg">
        <img src={image.url} alt="" className="h-full w-full object-cover" />
    </div>
    )
}

export default ImageCards;