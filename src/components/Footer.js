import React from 'react';
// import Instagram from './Instagram';


const Footer = () => {
  return (
    <>
      {/* <Instagram /> */}
      <footer className=" w-full bg-gray-900 py-6 text-white bottom-0 left-0 mb-0">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between">
          <div className="w-3/4 md:w-1/4 mb-4">
            <h2 className="text-xl sm:text-2xl mb-4">
              via ROMA non solo pizza
            </h2>
            <p className="mb-4 text-base font-thin">
              ViaRomaNonSoloPizza nasce dalla passione per la pizza coltivata da
              un sogno alla realizzazione
            </p>
          </div>
          <div className="w-3/4 md:w-1/4 mb-4">
            <h1 className="text-2xl mb-4">Orari di apertura</h1>
            <ul className="font-thin">
              <li className="flex flex-row mb-4 justify-between">
                Lunedi: <strong className="ml-6">Closed</strong>
              </li>
              <li className="flex flex-row mb-4 justify-between">
                Martedi:
                <p className="flex flex-col">
                  <strong>10.30am-2.30pm</strong>
                  <strong>6-11.30pm</strong>
                </p>
              </li>
              <li className="flex flex-row mb-4 justify-between">
                Mecrlodi:
                <p className="flex flex-col">
                  <strong>10.30am-2.30pm</strong>
                  <strong>6-11.30pm</strong>
                </p>
              </li>
              <li className="flex flex-row mb-4 justify-between">
                Thursday:
                <p className="flex flex-col">
                  <strong>10.30am-2.30pm</strong>
                  <strong>6-11.30pm</strong>
                </p>
              </li>
              <li className="flex flex-row mb-4 justify-between">
                Friday:
                <p className="flex flex-col">
                  <strong>10.30am-2.30pm</strong>
                  <strong>6-11.30pm</strong>
                </p>
              </li>
              <li className="flex flex-row mb-4 justify-between">
                Saturday:
                <p className="flex flex-col">
                  <strong>10.30am-2.30pm</strong>
                  <strong>6-11.30pm</strong>
                </p>
              </li>
              <li className="flex flex-row mb-4 justify-between">
                Sunday:
                <p className="flex flex-col">
                  <strong>10.30am-2.30pm</strong>
                  <strong>6-11.30pm</strong>
                </p>
              </li>
            </ul>
          </div>
          <div className="w-3/6 md:w-2/6 mb-4">
            <h1 className="text-2xl mb-4">Indirizzo</h1>
            <p className="mb-4 font-thin">
              Via Roma, 40, 21018 Sesto Calende VA, Italy
            </p>
            <h1 className="text-2xl mb-4">Chiamaci</h1>
            <p className="mb-4 font-thin">+39 0331 913574</p>
            <div className="z-50">
              <ul className="flex flex-row">
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                  <a href="https://www.facebook.com/pages/category/Pizza-Place/Viaromanonsolopizza-108686514250214/">
                    <i className="fab fa-facebook text-2xl"></i>
                  </a>
                </li>
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                  <a href="https://www.instagram.com/viaromanonsolopizza/">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </li>
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                  <a href="https://www.google.com/maps/place/viaROMAnonsolopizza/@45.7240617,8.6311318,15z/data=!4m5!3m4!1s0x0:0x6dc73345553ebfda!8m2!3d45.7240617!4d8.6311318">
                    <i className="fab fa-google text-2xl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
