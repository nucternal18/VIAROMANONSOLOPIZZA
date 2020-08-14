import React from 'react'

const ImageCards = ({ image }) => {

    return (
    <div className=" h-48 shadow-lg">
        <img src={image.url} alt="" className="w-full object-fit" />
    </div>
    )
}

export default ImageCards;