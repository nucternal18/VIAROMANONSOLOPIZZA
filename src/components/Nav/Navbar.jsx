import React from "react";
import Burger from "./Burger";

import styled from "styled-components";
import Striscia from "../../assets/img/strisciaNoBG.jpg";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 10px 0;
    width: 18rem;
  }

  @media (max-width: 768px) {
    .logo {
      width: 15rem;
      margin-top: 0.3em;
      margin-right: 0.1rem;
    }
  }
`;

const Navbar = () => {
  return (
    <header>
      <Nav>
        <div className="logo">
          <img src={Striscia} alt="via roma non solo pizza logo" />
        </div>
        <Burger />
      </Nav>
    </header>
  );
};

export default Navbar;
