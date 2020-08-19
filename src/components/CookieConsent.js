import React from "react";
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
        <a href="#!">Terms and Conditions</a>. Please accept before using our
        site.
      </p>
      <button
        onClick={acceptCookie}
        className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-0 px-2 border border-black hover:border-transparent rounded"
      >
        Accept
      </button>
    </ConsentPopup>
  );
};

const ConsentPopup = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  background-color: #fff;
  opacity: ${({ hidden }) => (hidden ? 0 : !hidden ? 0.8 : 0)};
  transition: opacity 0.8s ease;
  margin: 0 auto;

  & p {
    margin-right: 1rem;
    padding: 1rem 0;
  }
`;

export default CookieConsent;
