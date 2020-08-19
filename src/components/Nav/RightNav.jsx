import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open} onClick={() => setOpen(!open)}>
      <Link to="/">
        <li>HOME</li>
      </Link>

      <Link to="/menu">
        <li>MENU</li>
      </Link>

      <Link to="/gallery">
        <li>GALLERY</li>
      </Link>

      <Link to="/contact">
        <li>CONTACT</li>
      </Link>
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
