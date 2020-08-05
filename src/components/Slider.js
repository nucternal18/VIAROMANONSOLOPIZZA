import React from 'react';

import { Carousel } from 'react-responsive-carousel';

// Import Images
import PizzaImg1 from '../assets/img/aliyah-jamous-2BJ4la6xgRw-unsplash.jpg';
import PizzaImg2 from '../assets/img/hemant-latawa-IfQlwNqJqV8-unsplash.jpg';
import PizzaImg3 from '../assets/img/ivan-torres-MQUqbmszGGM-unsplash.jpg';
import PizzaImg4 from '../assets/img/nik-owens-40OJLYVWeeM-unsplash.jpg';

const Slider = () => (
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} className="w-full h-full md:h- flex-grow">
            <div>
                <img alt="" src={PizzaImg1} />
                
            </div>
            <div>
                <img alt="" src={PizzaImg2} />
                
            </div>
            <div>
                <img alt="" src={PizzaImg3} />
                
            </div>
            <div>
                <img alt="" src={PizzaImg4} />
                
            </div>
        </Carousel>
);

export default Slider;
