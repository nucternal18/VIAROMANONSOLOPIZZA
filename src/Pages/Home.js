import React from 'react'
import Slider from '../components/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Menu from './Menu';
import Contact from './Contact';

const Home = () => {
    return (
        <main className=" object-top flex flex-col overflow-scroll">
            <Slider />
            <Menu />
            <Contact />
        </main>
    )
}

export default Home;
