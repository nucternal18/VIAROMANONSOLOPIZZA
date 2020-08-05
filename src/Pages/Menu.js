import React, {useState} from 'react';
import { pizzas, main, desserts } from '../menu';


const Menu = () => {
    const [selectedMain, setSelectedMain] = useState(false)
    const [selectedPizza, SetSelectedPizza] = useState(true)
    const [selectedDesserts, SetSelectedDesserts] = useState(false)
    const [selectedDrinks, SetSelectedDrinks] = useState(false);


    const handleSelectedMain = () => {
        setSelectedMain(true)
        SetSelectedPizza(false)
        SetSelectedDesserts(false)
        SetSelectedDrinks(false)
    }
    const handleSelectedPizza = () => {
        SetSelectedPizza(true)
        setSelectedMain(false)
        SetSelectedDesserts(false)
        SetSelectedDrinks(false)
    }

    const handleSelectedDesserts = () => {
        SetSelectedDesserts(true)
        setSelectedMain(false)
        SetSelectedPizza(false)
        SetSelectedDrinks(false)
    }

    const handleSelectedDrinks = () => {
        SetSelectedDrinks(true)
        setSelectedMain(false)
        SetSelectedPizza(false)
        SetSelectedDesserts(false)
    }

    
  return (
    <div className='w-full my-8 flex flex-col flex-grow'>
      <div className='container w-full mx-auto'>
        <div className='mb-8'>
          <p className=' text-center'>OUR MENU</p>
          <h1 className='text-2xl md:text-3xl text-center'>
            Discover Our Menu
          </h1>
        </div>

        <div className='flex flex-col md:flex-row mx-auto text-center w-11/12 md:w-2/4 mb-8'>
        <button onClick={handleSelectedMain} className={selectedMain ? 'bg-red-700 text-white font-semibold py-2 px-4 border-none mx-auto md:mx-2  shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4' : 'bg-white  hover:bg-red-700 hover:text-white text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4'} href="#v-pizza" role="tab" aria-controls="v-pizza" aria-selected={selectedPizza}>
            Main
          </button>
                  <button onClick={handleSelectedPizza} className={selectedPizza ? 'bg-red-700 text-white font-semibold py-2 px-4 border-none mx-auto md:mx-2  shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4' : 'bg-white  hover:bg-red-700 hover:text-white text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4'} href="#v-pizza" role="tab" aria-controls="v-pizza" aria-selected={selectedPizza}>
            Pizze
          </button>
          <button onClick={handleSelectedDesserts} className={selectedDesserts ? 'bg-red-700 text-white font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4' : 'bg-white hover:bg-red-700 hover:text-white text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4'} href="#v-dessert" role="tab" aria-controls="v-dessert" aria-selected={selectedDesserts}>
            Dessert
          </button>
                  <button onClick={handleSelectedDrinks} className={selectedDrinks ? 'bg-red-700 text-white font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4' : 'bg-white hover:bg-red-700 hover:text-white text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow transition duration-1000 ease-in-out transform hover:-translate-y-1 focus:outline-none hover:scale-110 w-3/4'} href="#v-drinks" role="tab" aria-controls="v-drinks" aria-selected={selectedDrinks}>
            La Nostra Cantina
          </button>
        </div>

        {/* Main Menu Card */}
        <div id='v-pizza' className={selectedMain ?  'block w-11/12 md:w-3/5 flex flex-row flex-wrap text-left mx-auto p-2 mb-4 overflow-hidden shadow-lg': 'hidden'}>
          {main.map((m, i) => (
              <div key={i} className="w-full">
              <div>
              <h1 className='text-2xl md:text-3xl text-center font-light mb-6'>ANTIPASTI/APPETIZERS</h1>
                {m.Antipasti.map((ant, i) => (
                    <div key={i} className=' w-full  flex justify-between px-1 mb-4'>
                    <div className='rounded-b lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col'>
                        <div className='mb-2'>
                        <div className='text-gray-900 font-bold text-xl mb-2 text-left '>
                            {ant.name}
                        </div>
                        <div className='text-red-400 font-light text-xl text-left '>
                            {ant.name_english}
                        </div>
                        
                        </div>
                    </div>
                    <div className='rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal'>
                        <h1 className='text-gray-900 font-bold text-xl inline'>
                        &euro; {ant.price},00
                        </h1>
                    </div>
                    </div>
                ))}
              </div>
              <div>
                <h1 className='text-2xl md:text-3xl text-center font-light mb-6'>PRIMI/FIRST COURSE</h1>
                {m.Primi.map((prm, i) => (
                    <div key={i} className=' w-full  flex justify-between px-1 mb-4'>
                        <div className='rounded-b lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col'>
                            <div className='mb-2'>
                                <div className='text-gray-900 font-bold text-xl mb-2 text-left '>
                                    {prm.name}
                                </div>
                                <div className='text-red-400 font-light text-xl text-left '>
                                    {prm.name_english}
                                </div>
                            </div>
                        </div>
                        <div className='rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal'>
                            <h1 className='text-gray-900 font-bold text-xl inline'>
                                &euro; {prm.price},00
                            </h1>
                        </div>
                    </div>
                ))}
              </div>
              <div>
              <h1 className='text-2xl md:text-3xl text-center font-light mb-6'>SECONDI/MAIN COURSE</h1>
                {m.Secondi.map((sec, i) => (
                    <div key={i} className=' w-full flex justify-between px-1 mb-4'>
                        <div className='rounded-b lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col'>
                            <div className='mb-2'>
                                <div className='text-gray-900 font-bold text-xl mb-2 text-left '>
                                    {sec.name}
                                </div>
                                <div className='text-red-400 font-light text-xl text-left '>
                                    {sec.name_english}
                                </div>
                            </div>
                        </div>
                        <div className='rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal'>
                            <h1 className='text-gray-900 font-bold text-xl inline'>
                                &euro; {sec.price},00
                            </h1>
                        </div>
                    </div>
                ))}
              </div>
              <div>
              <h1 className='text-2xl md:text-3xl text-center font-light mb-6'>CONTORNI/SIDE DISH</h1>
                {m.Contorni.map((cont, i) => (
                    <div key={i} className=' w-full flex justify-between px-1 mb-4'>
                        <div className='rounded-b lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col'>
                            <div className='mb-2'>
                                <div className='text-gray-900 font-bold text-xl mb-2 text-left '>
                                    {cont.name}
                                </div>
                                <div className='text-red-400 font-light text-xl text-left '>
                                    {cont.name_english}
                                </div>
                            </div>
                        </div>
                        <div className='rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal'>
                            <h1 className='text-gray-900 font-bold text-xl inline'>
                                &euro; {cont.price},00
                            </h1>
                        </div>
                    </div>
                ))}
              </div>
              </div>
          ))}
              </div>

        {/* Pizza menu card */}
        <div id='v-pizza' className={selectedPizza ?  'block w-11/12 md:w-full flex flex-row flex-wrap text-left mx-auto p-2 mb-4 overflow-hidden shadow-lg': 'hidden'}>
          {pizzas.map((pizza, i) => (
            <div key={i} className=' w-full lg:w-3/6 flex justify-between px-1 mb-4'>
              <div className='rounded-b lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col'>
                <div className='mb-2'>
                  <div className='text-gray-900 font-bold text-xl mb-2 text-left '>
                    {pizza.name}
                  </div>
                  <div className='flex flex-row flex-wrap'>
                    {pizza.ingredients.map((ing, i) => (
                      <p key={i} className='text-red-400 text-base mr-1 text-left'>
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
          <div className="p-2">
              <p className="text-gray-900 font-light text-xl mb-2  text-left">Tutte le nostre pizze possono essere prodotte con impasto integrale +1,00 &euro; da listino e impasto per celiaci +2,00 &euro; da listino Ingredienti extra da 1,00 a 3,00 &euro; </p>
              <p className="text-gray-900 font-light text-xl mb-2  text-left">All our pizza's can be prepared with  whole meal dough adding +1,00 &euro; to the price and dough for celiacs adding +2,00 &euro; to the price. Extra ingredients from 1,00 to 3,00 &euro;</p>
              <p className="text-gray-900 font-light text-xl mb-2  text-left">A lato degli ingredienti vengono riportati i codici degli allergeni presenti in ogni preparazione (la lista si trova nell'ultima pagina del menu')</p>
          </div>
              </div>
              <div id="v-dessert" className={selectedDesserts ?  'block w-11/12 md:w-3/5 flex flex-row flex-wrap text-left mx-auto p-1 md:p-2 mb-4 overflow-hidden shadow-lg': 'hidden'}>
                     {desserts.map((dessert, i) => (
                        <div key={i} className=' w-full flex justify-between mb-4'>
                        <div className='rounded-b lg:rounded-b-none justify-start lg:rounded-r p-1 md:p-2 w-4/6'>
                            <div className='mb-2'>
                            <div className='text-gray-900 font-bold text-lg md:text-xl mb-2 text-left break-all '>
                                {dessert.name}
                            </div>
                            </div>
                        </div>
                        <div className='rounded-b lg:rounded-b-none lg:rounded-r p-1 md:p-2 mx-2 leading-normal'>
                            <h2 className='text-gray-900 font-bold text-base md:text-xl inline text-justify'>
                            &euro; {dessert.price},00
                            </h2>
                        </div>
                        </div>
                     ))}
                     <div className="p-2">
                        <p className="text-gray-900 font-light text-lg md:text-xl mb-2  text-left">Tutte i nostri dessert congelati possono essere aggiunti caffe' o alcolici &euro;1,00 </p>
                        <p className="text-gray-900 font-light text-lg md:text-xl mb-2  text-left">Coperto  &euro;2,00</p>
                    </div>
              </div>
              <div id="v-drinks" className={selectedDrinks ?  'block': 'hidden'}>
                        drinks
              </div>
      </div>
    </div>
  );
};

export default Menu;
