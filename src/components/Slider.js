import React, { useState, useRef, useEffect } from "react";

import { Carousel } from "react-responsive-carousel";
import useFirestore from "../hooks/useFirestore";
import SliderImgCard from '../components/SliderImgCard'


const Slider = () => {
  const { docs } = useFirestore("sliderimages");
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      className="w-full"
    >
      {docs &&
        docs.map((doc) => (
          <SliderImgCard
            setLoaded={setLoaded}
            image={doc}
            key={ doc.id }
            imgRef={imgRef}
          />
        ))}
    </Carousel>
  );
};

export default Slider;
