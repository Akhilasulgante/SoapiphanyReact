import { Component } from "react";
import {
  NavBarContainer,
  LeftContainer,
  RightContainer,
  NavBarInnerContainer,
  NavBarLinkContainer,
  NavBarLink,
} from "../styles/NavBar.style";
import logo from "../images/logo.png";
import "./Navbar.css";

/**
 * Class handles Navigation bar component
 */
class NavBar extends Component {
  render() {
    return (
      <NavBarContainer>
        <NavBarInnerContainer>
          <LeftContainer>
            <img src={logo} alt="failed to load logo" className="logo" />
          </LeftContainer>
          <RightContainer>
            {/* <logoImg src={logo} alt="logo"></logoImg> */}
            <NavBarLinkContainer>
              <NavBarLink to="/">Home</NavBarLink>
              <NavBarLink to="/products">products</NavBarLink>
              <NavBarLink to="/about">About us</NavBarLink>
              <NavBarLink to="/stories">stories</NavBarLink>
            </NavBarLinkContainer>
          </RightContainer>
        </NavBarInnerContainer>
      </NavBarContainer>
    );
  }
}

export default NavBar;
