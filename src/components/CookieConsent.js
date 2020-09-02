import React from "react";
import { Link} from 'react-router-dom'
import styled from "styled-components";
import Cookie from "js-cookie";

const CookieConsent = ({ hidden, setHidden }) => {
  const acceptCookie = (e) => {
    e.preventDefault();
    Cookie.set("token", "vrnsp_accept_true", { expires: 7 });
    setHidden(true);
  };

  return (
    <ConsentPopup hidden={hidden}>
      <p>
        This page uses cookies. By using this site you agree to our{" "}
        <Link to='/cookie-policy'>cookie policy</Link>.
        <button
          onClick={acceptCookie}
          className="bg-transparent hover:bg-red-400 text-black underline font-bold hover:text-white py-0 px-0 ml-1 border-transparent rounded"
        >
          Accept
        </button>
      </p>
    </ConsentPopup>
  );
};

const ConsentPopup = styled.div`
  max-width: 60%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2px;
  display: flex;
  background-color: #fff;
  opacity: ${({ hidden }) => (hidden ? 0 : !hidden ? 0.9 : 0)};
  transition: opacity 0.8s ease;
  margin: 1rem auto;
  -webkit-box-shadow: 2px 10px 34px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 10px 34px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 10px 34px -6px rgba(0, 0, 0, 0.75);

  & p {
    margin-right: 1rem;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 1px;
    font-size: 12px;
  }
`;

export default CookieConsent;
