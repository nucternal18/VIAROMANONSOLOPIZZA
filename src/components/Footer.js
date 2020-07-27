import React from 'react'

const Footer = () => {
    return (
        <footer className=" w-full bg-gray-900 py-6 text-white bottom-0 left-0 mb-0">
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between">
                <div className="w-2/4 md:w-1/4 mb-4">
                    <h2 className="text-2xl mb-4">via ROMA non solo pizza</h2>
                    <p className="mb-4 font-thin">ViaRomaNonSoloPizza nasce dalla passione per la pizza coltivata da un sogno alla realizzazione</p>
                </div>
                <div className="w-2/4 md:w-1/4 mb-4">
                    <h1 className="text-2xl mb-4">Orari di apertura</h1>
                    <ul className="font-thin">
                        <li className="flex flex-row mb-4 justify-between">Lunedi: <strong className="ml-6">Closed</strong></li>
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
                        </p></li>
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
                <div className="w-2/6 mb-4">
                    <h1 className="text-2xl mb-4">Indirizzo</h1>
                    <p className="mb-4 font-thin">Via Roma, 40, 21018 Sesto Calende VA, Italy</p>
                    <h1 className="text-2xl mb-4">Chiamaci</h1>
                    <p className="mb-4 font-thin">+39 0331 913574</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
