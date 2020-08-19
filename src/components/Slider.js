import React from 'react';

import { Carousel } from 'react-responsive-carousel';

// Import Images
import PizzaImg1 from '../assets/img/aliyah-jamous-2BJ4la6xgRw-unsplash.jpg';
import PizzaImg2 from '../assets/img/hemant-latawa-IfQlwNqJqV8-unsplash.jpg';
import PizzaImg3 from '../assets/img/ivan-torres-MQUqbmszGGM-unsplash.jpg';
import PizzaImg4 from '../assets/img/nik-owens-40OJLYVWeeM-unsplash.jpg';

const Slider = () => (
  <div>
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      className="w-full"
    >
      <div >
        <img alt="" src={PizzaImg1} id="intro" />
      </div>
      <div>
        <img alt="" src={PizzaImg2} id="intro" />
      </div>
      <div>
        <img alt="" src={PizzaImg3} id="intro" />
      </div>
      <div>
        <img alt="" src={PizzaImg4} id="intro" />
      </div>
    </Carousel>
  </div>
);

export default Slider;
