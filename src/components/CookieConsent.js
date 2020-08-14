import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const storageType = localStorage;
const consentPropertyName = 'vrnsp_consent';

const CookieConsent = () => {
    const [ consent, setConsent ] = useState(false);
    const [ hidden, setHidden ] = useState(false);
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);

    useEffect(() => {
        if (consent && shouldShowPopup(storageType)) {
            setHidden(true)
        }
    }, [consent])

    const acceptCookie = event => {
        saveToStorage(storageType);
        setConsent(true)
    }

    return (
        <ConsentPopup hidden={hidden} >
            <p>This page uses cookies</p>
            <button onClick={acceptCookie} className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">Accept</button>
        </ConsentPopup>
    )

}

const ConsentPopup = styled.div`
position: fixed;
bottom: 0;
left: 0;
right: 0;
padding: 2rem;
display: flex;
background-color: #fff;
opacity: ${({ hidden }) => hidden ? 0 : 0.8 };
transition: opacity .8s ease;
margin: 0 auto;

& p {
    margin-right: 1rem;
    padding: 1rem 0;
}


`;

export default CookieConsent;

