import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

//import styles and assets
import styled from "styled-components";

const NavItems = [
  { name: "One", link: "/" },
  { name: "Two", link: "/" },
  { name: "Three", link: "/" },
  { name: "Four", link: "/" },
  { name: "Three", link: "/" },
];

const UtilItems = [
  { name: "One", link: "/" },
  { name: "Two", link: "/" },
  { name: "Three", link: "/" },
];

type LinksProps = {
  isOpen: boolean;
};

interface Props {
  name?: string;
  link?: string;
}

const Header: FC<Props> = ({ name, link }) => {
  const [open, setOpen] = useState(false);

  return (
    <Nav role="navigation" aria-label="Global">
      <ResponsiveList>
        <li aria-label="logo">
          <Link to="/">Logo</Link>
        </li>
        <Mobile>
          {open ? (
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span aria-hidden="true">Close</span>
            </button>
          ) : (
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span aria-hidden="true">Menu</span>
            </button>
          )}
        </Mobile>
      </ResponsiveList>
      <NavLinks isOpen={open}>
        <li className="navlogo" aria-label="logo">
          <Link to="/">Logo</Link>
        </li>
        <li aria-label="main navigation">
          <ul>
            {NavItems.map((item) => (
              <li className="navitems">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li aria-label="utility navigation">
          <ul>
            {UtilItems.map((item) => (
              <li className="utilitems">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
`;

const ResponsiveList = styled.ul`
  width: 100%;
  height: 3.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  background-color: #3aff37;

  @media (min-width: 640px) {
    display: none;
  }
`;

const NavLinks = styled.ul<LinksProps>`
  min-height: 3.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a284cd;

  ul {
    display: flex;
  }

  li {
    padding: 0 0.25em;
  }

  @media (max-width: 640px) {
    background-color: #fff;
    display: block;
    position: absolute;
    z-index: 1;
    top: 3.5em;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    margin: 0 auto;
    padding: 1em;
    max-height: ${(props) => (props.isOpen ? "100vh" : 0)};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: visibility 0.2s ease-in, max-height 0.2s ease-in;

    ul {
      display: block;
    }

    .navlogo {
      display: none;
    }

    .navitems,
    .utilitems {
      font-size: 1rem;
      padding: 0.6em 0;
    }
  }
`;

const Mobile = styled.li`
  @media (min-width: 640px) {
    display: none;
  }
`;

export default Header;
