import React from 'react';
import { useLocation, Link } from 'react-router-dom'

const PageNotFound = () => {
    const location = useLocation();
    return (
      <div className="container mx-auto flex flex-col flex-grow justify-center items-center p-4">
        <h1 className=" text-xl md:text-3xl mb-4 text-center font-bold">
          404 PAGE {location.pathname} NOT FOUND
        </h1>
        <p className="text-center max-w-md mb-4 font-thin text-justify">
          La pagina che stai cercando non esiste. Potrebbe essere stato spostato
          o rimosso del tutto. Forse puoi tornare alla home page del sito e
          vedere se riesci a trovare quello che stai cercando.
        </p>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4">
          <Link to="/">Torna alla homepage</Link>
        </button>
      </div>
    );
}

export default PageNotFound;
