import React, {useState} from 'react';
import { pizzas } from '../menu';

import PizzaImg2 from '../assets/img/PizzaImg2.jpeg'

const Menu = () => {
    const [selectedPizza, SetSelectedPizza] = useState(true)
    const [selectedDesserts, SetSelectedDesserts] = useState(false)
    const [selectedDrinks, SetSelectedDrinks] = useState(false)

    const handleSelectedPizza = () => {
        SetSelectedPizza(true)
        SetSelectedDesserts(false)
        SetSelectedDrinks(false)
    }

    const handleSelectedDesserts = () => {
        SetSelectedDesserts(true)
        SetSelectedPizza(false)
        SetSelectedDrinks(false)
    }

    const handleSelectedDrinks = () => {
        SetSelectedDrinks(true)
        SetSelectedPizza(false)
        SetSelectedDesserts(false)
    }

    
  return (
    <div className='w-full my-32 flex flex-col flex-grow'>
      <div className='container w-full mx-auto items-center'>
        <div className='mb-8'>
          <p className=' text-center'>OUR MENU</p>
          <h1 className='text-2xl md:text-3xl text-center'>
            Discover Our Menu
          </h1>
        </div>

        <div className='flex flex-col md:flex-row mx-auto text-center w-11/12 md:w-2/4 mb-8'>
                  <button onClick={handleSelectedPizza} className={selectedPizza ? 'bg-orange-400 text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2  shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4' : 'bg-white  hover:bg-orange-400 text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4'} href="#v-pizza" role="tab" aria-controls="v-pizza" aria-selected={selectedPizza}>
            Le Pizze
          </button>
          <button onClick={handleSelectedDesserts} className={selectedDesserts ? 'bg-orange-400 text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4' : 'bg-white hover:bg-orange-400 text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4'} href="#v-dessert" role="tab" aria-controls="v-dessert" aria-selected={selectedDesserts}>
            Dessert
          </button>
                  <button onClick={handleSelectedDrinks} className={selectedDrinks ? 'bg-orange-400 text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4' : 'bg-white hover:bg-orange-400 text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4'} href="#v-drinks" role="tab" aria-controls="v-drinks" aria-selected={selectedDrinks}>
            La Nostra Cantina
          </button>
        </div>
        {/* Menu Cards */}
        <div id='v-pizza' className={selectedPizza ?  'block w-11/12 md:w-full flex flex-row flex-wrap text-left mx-auto': 'hidden'}>
          {pizzas.map((pizza, i) => (
            <div key={i} className=' w-full lg:w-3/6 flex justify-around rounded p-2 mb-4 overflow-hidden shadow-lg hover:bg-orange-400'>
              <img
                className='w-20 h-20 rounded-full m-2'
                src={PizzaImg2}
                alt='pizza'
              />
              <div className='rounded-b lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col'>
                <div className='mb-2'>
                  <div className='text-gray-900 font-bold text-xl mb-2 text-left '>
                    {pizza.name}
                  </div>
                  <div className='flex flex-row flex-wrap'>
                    {pizza.ingredients.map((ing, i) => (
                      <p key={i} className='text-gray-700 text-base mr-1 text-left'>
                        {ing}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className='rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal'>
                <h1 className='text-gray-900 font-bold text-xl inline'>
                  &euro; {pizza.price},00
                </h1>
              </div>
            </div>
          ))}
              </div>
              <div id="v-dessert" className={selectedDesserts ?  'block': 'hidden'}>
                        dessert
              </div>
              <div id="v-drinks" className={selectedDrinks ?  'block': 'hidden'}>
                        drinks
              </div>
      </div>
    </div>
  );
};

export default Menu;
