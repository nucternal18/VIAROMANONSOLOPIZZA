import React from 'react'

const ImageCards = ({ image }) => {

    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.url} alt="" className="w-full" />
    </div>
    )
}

export default ImageCards;