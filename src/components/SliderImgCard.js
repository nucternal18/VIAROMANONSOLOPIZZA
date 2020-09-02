import React from 'react'

const SliderImgCard = ({image, imgRef, setLoaded}) => {
    return (
      <div>
        <img
          loading="lazy"
          alt="pizza"
          src={image.url}
          id="intro"
          ref={imgRef}
          onLoad={() => setLoaded(true)}
        />
      </div>
    );
}

export default SliderImgCard;
