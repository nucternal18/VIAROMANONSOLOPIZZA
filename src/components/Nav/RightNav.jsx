import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/menu">MENU</Link>
      </li>
      <li>
        <Link to="/gallery">GALLERY</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 40;

  li {
    padding: 18px 10px;
    color: #333;

    &:hover {
      background: #fff;
      color: #333;
    }
  }

  Link {
    color: #333;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.7;
    li {
      color: #fff;
    }
  }
`;

export default RightNav;
