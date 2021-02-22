import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

//import components
import { OutlinedButton } from "./Button";

//import styles and assets
import styled from "styled-components";
import { Menu, Close } from "../assets/Icons";
import { colors } from "./StyleVariables";

const NavItems = [
  { name: "One", link: "/" },
  { name: "Two", link: "/" },
  { name: "Three", link: "/" },
  { name: "Four", link: "/" },
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
      <MobileHeader>
        <Link to="/" className="logo" aria-label="logo">
          Logo
        </Link>
        <MenuBtn>
          {open ? (
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <Close width={20} height={20} color="#000" stroke={2} />
            </button>
          ) : (
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Menu width={20} height={20} color="#000" stroke={2} />
            </button>
          )}
        </MenuBtn>
      </MobileHeader>
      <NavLinks isOpen={open}>
        <Link to="/" className="navlogo" aria-label="logo">
          Logo
        </Link>

        <Link to="" className="utils" aria-label="user profile">
          {/* <div className="user">
            <IconContainer>
              <User width={20} height={20} color="#fff" stroke={2} />
            </IconContainer>
            <div>
              <ChevronRight width={20} height={20} color="#000" stroke={2} />
            </div>
          </div> */}

          <OutlinedButton label="Login" fullwidth color={colors.gray} />
        </Link>

        <li className="links" aria-label="main navigation">
          <ul>
            {NavItems.map((item, idx) => (
              <li key={idx} className="navitems">
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

  a:visited {
    color: ${colors.gray};
  }
`;

const MobileHeader = styled.ul`
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #fff;
  /* border-bottom: 1px solid ${colors.lightergray}; */

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${colors.gray};
  }

  @media (min-width: 640px) {
    display: none;
  }
`;

const MenuBtn = styled.li`
  button {
    font-size: 0.925rem;
    background-color: transparent;
    outline: transparent;
    border: none;
    display: flex;
    align-items: center;
  }

  @media (min-width: 640px) {
    display: none;
  }
`;

// const NavLinks = styled.ul<LinksProps>`
//   background-color: #fff;
//   border-bottom: 1px solid ${colors.lightergray};
//   min-height: 58px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0em 1.5em;

//   ul {
//     display: flex;
//   }

//   li {
//     padding: 0 0.25em;
//   }

//   @media (max-width: 640px) {
//     background-color: #fff;
//     display: block;
//     position: absolute;
//     z-index: 1;
//     top: 3.5em;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     overflow-y: auto;
//     margin: 0 auto;
//     padding: 1em;
//     max-height: ${(props) => (props.isOpen ? "100vh" : 0)};
//     visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
//     transition: visibility 0.2s ease-in, max-height 0.2s ease-in;

//     ul {
//       display: block;
//     }

//     .navlogo {
//       display: none;
//     }

//     .navitems,
//     .utilitems {
//       font-size: 1rem;
//       padding: 0.6em 0;
//     }
//   }
// `;

const NavLinks = styled.ul<LinksProps>`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 58px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  margin: 0 auto;
  padding: 1em 2em;
  max-height: ${(props) => (props.isOpen ? "100vh" : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: visibility 0.2s ease-in, max-height 0.2s ease-in;
  z-index: 1;

  .navlogo {
    display: none;
  }

  .navitems,
  .user {
    font-size: 1rem;
    font-weight: 600;
    border-bottom: 1px solid ${colors.faintgray};
    padding: 0.6em 0;
  }

  .user {
    display: flex;
    justify-content: space-between;
  }

  .login {
    padding-bottom: 1.5em;
    border-bottom: 1px solid ${colors.faintgray};
  }
`;

// const IconContainer = styled.div`
//   width: 28px;
//   height: 28px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${colors.lightergray};
// `;

export default Header;
