import React from 'react'

const Footer = () => {
    return (
        <footer className=" w-full bg-gray-900 py-6 text-white bottom-0 left-0 mb-0">
            <div className="container mx-auto px-6 py-6 flex flex-row justify-around">
                <div className="">
                    <h2 className="text-2xl mb-4">via ROMA non solo pizza</h2>
                    <p></p>
                </div>
                <div>
                    <h1 className="text-2xl mb-4">Orari di apertura</h1>
                    <ul className="font-thin">
                        <li>Lunedi: <strong></strong></li>
                        <li>Martedi: <strong></strong></li>
                        <li>Mecrlodi: <strong></strong></li>
                        <li>Thursday: <strong></strong></li>
                        <li>Friday: <strong></strong></li>
                        <li>Saturday: <strong></strong></li>
                        <li>Sunday: <strong></strong></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl mb-4">Indirizzo</h1>
                    <p></p>
                    <h1 className="text-2xl mb-4">Chiamaci</h1>
                    <p></p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
