import React, { useState, useEffect } from "react";

import {
  projectFirestore,
  convertCollectionsSnapshotToMap,
} from "../firebase/config";
import Spinner from "../components/Spinner";

const Menu = () => {
  const [menu, setMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedMain, setSelectedMain] = useState(false);
  const [selectedPizza, SetSelectedPizza] = useState(true);
  const [selectedDesserts, SetSelectedDesserts] = useState(false);
  const [selectedDrinks, SetSelectedDrinks] = useState(false);

  const handleSelectedMain = () => {
    setSelectedMain(true);
    SetSelectedPizza(false);
    SetSelectedDesserts(false);
    SetSelectedDrinks(false);
  };
  const handleSelectedPizza = () => {
    SetSelectedPizza(true);
    setSelectedMain(false);
    SetSelectedDesserts(false);
    SetSelectedDrinks(false);
  };

  const handleSelectedDesserts = () => {
    SetSelectedDesserts(true);
    setSelectedMain(false);
    SetSelectedPizza(false);
    SetSelectedDrinks(false);
  };

  const handleSelectedDrinks = () => {
    SetSelectedDrinks(true);
    setSelectedMain(false);
    SetSelectedPizza(false);
    SetSelectedDesserts(false);
  };

  useEffect(() => {
    const collectionRef = projectFirestore.collection("Menu");

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      setMenu(collectionMap);
      setLoading(false);
    });

    return () => {
      unsubscribeFromSnapshot();
    }
  }, []);

  const { pizzas, main, desserts, cantina } = menu;

  return (
    <>
      <div className="w-full my-8 flex flex-col flex-grow">
        <div className="container w-full mx-auto">
          <div className="container-md mb-8">
            <h1 className="text-2xl md:text-3xl mx-auto mb-4 text-center w-3/5 sm:w-2/6 border-b border-red-200">
              Scopri il nostro menu
            </h1>
            <p className="max-w-xl justify-center font-thin mx-auto px-2 my-2 text-justify">
              Poche cose si avvicinano alla gioia della Pizza cucinata
              semplicemente con tenero amore e cura e il meglio ingredienti.
            </p>
          </div>

          <div className="flex flex-col md:flex-row mx-auto text-center w-11/12 md:w-2/4 mb-8">
            <button
              onClick={handleSelectedMain}
              className={
                selectedMain
                  ? "bg-red-700 text-white font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow-sm  focus:outline-none  w-3/4"
                  : "bg-white hover:bg-red-700 hover:text-white text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow-md  focus:outline-none  w-3/4"
              }
              href="#v-main"
              role="tab"
              aria-controls="v-main"
              aria-selected={selectedMain}
            >
              Cucina
            </button>
            <button
              onClick={handleSelectedPizza}
              className={
                selectedPizza
                  ? "bg-red-700 text-white font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow-sm  focus:outline-none  w-3/4"
                  : "bg-white hover:bg-red-700 hover:text-white text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow-md  focus:outline-none  w-3/4"
              }
              href="#v-pizza"
              role="tab"
              aria-controls="v-pizza"
              aria-selected={selectedPizza}
            >
              Pizze
            </button>
            <button
              onClick={handleSelectedDesserts}
              className={
                selectedDesserts
                  ? "bg-red-700 text-white font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow-sm  focus:outline-none  w-3/4"
                  : "bg-white hover:bg-red-700 hover:text-white text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow-md  focus:outline-none  w-3/4"
              }
              href="#v-dessert"
              role="tab"
              aria-controls="v-dessert"
              aria-selected={selectedDesserts}
            >
              Dessert
            </button>
            <button
              onClick={handleSelectedDrinks}
              className={
                selectedDrinks
                  ? "bg-red-700 text-white font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow-sm  focus:outline-none  w-3/4"
                  : "bg-white hover:bg-red-700 hover:text-white text-gray-800 font-semibold py-2 px-4 border-none mx-auto md:mx-2 shadow-md  focus:outline-none  w-3/4"
              }
              href="#v-drinks"
              role="tab"
              aria-controls="v-drinks"
              aria-selected={selectedDrinks}
            >
              La Nostra Cantina
            </button>
          </div>
        </div>
      </div>

      {/* Main Menu Card */}
      {loading ? (
        <Spinner />
      ) : (
        <div
          id="v-main"
          className={
            selectedMain
              ? "block max-w-md w-11/12 flex flex-col flex-wrap text-left mx-auto p-2 mb-4 overflow-hidden shadow-lg"
              : "hidden"
          }
        >
          {main.items.map((m, i) => (
            <div key={i} className="w-full">
              <div>
                <h1 className="text-2xl md:text-3xl text-center font-light mb-6 border border-red-200">
                  ANTIPASTI/APPETIZERS
                </h1>
                {m.Antipasti.map((ant, i) => (
                  <div
                    key={i}
                    className=" w-full  flex justify-between px-1 mb-4"
                  >
                    <div className="rounded-b w-2/3 sm:w-3/4 lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col">
                      <div className="mb-2">
                        <div className="text-gray-900 font-light text-xl mb-2 text-left ">
                          {ant.name}
                        </div>
                        <div className="text-red-400 font-light text-xl text-left ">
                          {ant.name_english}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal">
                      <h1 className="text-gray-900 font-bold text-base sm:text-xl inline">
                        &euro; {ant.price}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl text-center font-light mb-6 border border-red-200">
                  PRIMI/FIRST COURSE
                </h1>
                {m.Primi.map((prm, i) => (
                  <div
                    key={i}
                    className=" w-full  flex justify-between px-1 mb-4"
                  >
                    <div className="rounded-b w-2/3 sm:w-3/4 lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col">
                      <div className="mb-2">
                        <div className="text-gray-900 font-light text-xl mb-2 text-left ">
                          {prm.name}
                        </div>
                        <div className="text-red-400 font-light text-xl text-left ">
                          {prm.name_english}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal">
                      <h1 className="text-gray-900 font-bold text-base sm:text-xl inline">
                        &euro; {prm.price}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl text-center font-light mb-6 border border-red-200">
                  SECONDI/MAIN COURSE
                </h1>
                {m.Secondi.map((sec, i) => (
                  <div
                    key={i}
                    className=" w-full flex justify-between px-1 mb-4"
                  >
                    <div className="rounded-b w-2/3 sm:w-3/4 lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col">
                      <div className="mb-2">
                        <div className="text-gray-900 font-light text-xl mb-2 text-left ">
                          {sec.name}
                        </div>
                        <div className="text-red-400 font-light text-xl text-left ">
                          {sec.name_english}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal">
                      <h1 className="text-gray-900 font-bold text-base sm:text-xl inline">
                        &euro; {sec.price}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl text-center font-light mb-6 border border-red-200">
                  CONTORNI/SIDE DISH
                </h1>
                {m.Contorni.map((cont, i) => (
                  <div
                    key={i}
                    className=" w-full flex justify-between px-1 mb-4"
                  >
                    <div className="rounded-b w-2/3 sm:w-3/4 lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col">
                      <div className="mb-2">
                        <div className="text-gray-900 font-light text-xl mb-2 text-left ">
                          {cont.name}
                        </div>
                        <div className="text-red-400 font-light text-xl text-left ">
                          {cont.name_english}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal">
                      <h1 className="text-gray-900 font-bold text-base sm:text-xl inline">
                        &euro; {cont.price}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pizza menu card */}
      {loading ? (
        <Spinner />
      ) : (
        <div
          id="v-pizza"
          className={
            selectedPizza
              ? "block container  md:w-full flex flex-row flex-wrap text-left mx-auto p-2 mb-4 overflow-hidden shadow-lg"
              : "hidden"
          }
        >
          {pizzas.items.map((pizza, i) => (
            <div
              key={i}
              className=" w-full lg:w-3/6 flex justify-between px-1 mb-4"
            >
              <div className="rounded-b w-2/3 sm:w-3/4 lg:rounded-b-none justify-start lg:rounded-r p-2 flex flex-col">
                <div className="mb-2">
                  <div className="text-gray-900 font-light text-xl mb-2 text-left ">
                    {pizza.name}
                  </div>
                  <div className="flex flex-row flex-wrap">
                    {pizza.ingredients.map((ing, i) => (
                      <p
                        key={i}
                        className="text-red-400 text-base mr-1 text-left"
                      >
                        {ing}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-b lg:rounded-b-none lg:rounded-r p-2  leading-normal">
                <h1 className="text-gray-900 font-bold text-base sm:text-xl inline">
                  &euro; {pizza.price}
                </h1>
              </div>
            </div>
          ))}
          <div className="p-2">
            <p className="text-gray-900 font-light text-base sm:text-xl mb-2  text-left">
              Tutte le nostre pizze possono essere prodotte con impasto per
              celiaci +2,00 &euro; da listino Ingredienti extra da 1,00 a 3,00
              &euro;{" "}
            </p>
            <p className="text-gray-900 font-light text-base sm:text-xl mb-2  text-left">
              All our pizza's can be prepared with dough for celiacs adding
              +2,00 &euro; to the price. Extra ingredients from 1,00 to 3,00
              &euro;
            </p>
            <p className="text-gray-900 font-light text-base sm:text-xl mb-2  text-left">
              A lato degli ingredienti vengono riportati i codici degli
              allergeni presenti in ogni preparazione (la lista si trova
              nell'ultima pagina del menu')
            </p>
          </div>
        </div>
      )}
      {/* Desserts card */}
      {loading ? (
        <Spinner />
      ) : (
        <div
          id="v-dessert"
          className={
            selectedDesserts
              ? "block w-11/12 md:w-3/5 flex flex-row flex-wrap text-left mx-auto p-1 md:p-2 mb-4 overflow-hidden shadow-lg"
              : "hidden"
          }
        >
          {desserts.items.map((dessert, i) => (
            <div key={i} className=" w-full flex justify-between mb-4">
              <div className="rounded-b lg:rounded-b-none justify-start lg:rounded-r p-1 md:p-2 w-4/6">
                <div className="mb-2">
                  <div className="text-gray-900 font-light text-lg md:text-xl mb-2 text-left break-all ">
                    {dessert.name}
                  </div>
                </div>
              </div>
              <div className="rounded-b lg:rounded-b-none lg:rounded-r p-1 md:p-2 mx-2 leading-normal">
                <h2 className="text-gray-900 font-bold text-base md:text-xl inline text-justify">
                  &euro; {dessert.price}
                </h2>
              </div>
            </div>
          ))}
          <div className="p-2">
            <p className="text-gray-900 font-light text-lg md:text-xl mb-2  text-left">
              Tutte i nostri dessert congelati possono essere aggiunti caffe' o
              alcolici &euro;1,00{" "}
            </p>
            <p className="text-gray-900 font-light text-lg md:text-xl mb-2  text-left">
              Coperto &euro;2,00
            </p>
          </div>
        </div>
      )}
      {/* Cantina Card */}
      {loading ? (
        <Spinner />
      ) : (
        <div
          id="v-drinks"
          className={
            selectedDrinks
              ? "block table container-md w-full md:w-3/5 mx-2 flex-col p-1 md:p-2 mx-auto mb-4 overflow-hidden shadow-lg"
              : "hidden"
          }
        >
          <div className="w-full flex flex-row justify-between">
            <p className="px-2 py-2">{""}</p>
            <p className=" py-2 ml-24 sm:ml-48 font-bold">Calice</p>
            <p className="px-2 py-2 font-bold">Bottiglia</p>
          </div>
          {cantina.items.map((drink, i) => (
            <div
              key={i}
              className="w-full table flex-col justify-between table-auto px-1"
            >
              <div>
                <div className="border border-red-200 text-center">
                  <p className="px-1 py-1 text-lg md:text-3xl font-light">
                    {drink.subtitle}
                  </p>
                </div>
              </div>
              {drink.types.map((bottle, i) => (
                <div key={i} className="w-full flex  justify-between mb-4">
                  <p className="px-1 py-2 w-1/3 sm:w-1/2 text-lg md:text-xl">
                    {bottle.name}
                  </p>
                  <div className="px-2 py-2 sm:w-1/4">
                    <h2 className="text-gray-900 font-bold text-base md:text-xl ">
                      {bottle.Calice && `€ ${bottle.Calice}`}
                    </h2>
                  </div>
                  <div className="px-1 py-2 w-1/4 text-right">
                    <h2 className="text-gray-900 font-bold text-base md:text-xl inline text-justify">
                      &euro; {bottle.Bottiglia}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
