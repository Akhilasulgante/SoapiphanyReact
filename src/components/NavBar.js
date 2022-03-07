import { Component } from "react";
import {
  NavBarContainer,
  LeftContainer,
  RightContainer,
  NavBarInnerContainer,
  NavBarLinkContainer,
  NavBarLink,
  logoImg,
} from "../styles/NavBar.style";
import logo from "../images/logo.png";
import "./Navbar.css";

class NavBar extends Component {
  render() {
    return (
      <NavBarContainer>
        <NavBarInnerContainer>
          <LeftContainer>
            <NavBarLinkContainer>
              <NavBarLink to="/">Home</NavBarLink>
              <NavBarLink to="/products">products</NavBarLink>
              <NavBarLink to="/about">About us</NavBarLink>
            </NavBarLinkContainer>
          </LeftContainer>
          <RightContainer>
            {/* <logoImg src={logo} alt="logo"></logoImg> */}
            <img src={logo} alt="failed to load logo" className="logo" />
          </RightContainer>
        </NavBarInnerContainer>
      </NavBarContainer>
    );
  }
}

export default NavBar;
