import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import { Styledli, StyledButtonText, StyledButton } from "./styles";
import tedxuw_logo from "../../res/images/tedxuw_logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        color: "white",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        paddingLeft: "0px !important",
        background: "black",
        width: "100%",
        zIndex: "10",
        position: "fixed",
        height: "76px",
      }}>
      <Container
        style={{ width: "1040px", marginLeft: "auto", marginRight: "auto" }}>
        <ul
          style={{
            marginTop: "0px",
            paddingTop: "35px",
            paddingBottom: "0px",
            display: "flex",
            listStyle: "none",
            height: "50px",
            justifyContent: "space-around",
            background: "none",
            width: "70%",
          }}>
          <li>
            <a href="/">
              <img
                src={tedxuw_logo}
                style={{
                  transform: "translate(-75px,-10px)",
                  position: "fixed",
                }}
              />
            </a>
          </li>

          <NavLink exact to="/Speakers">
            <Styledli>Speakers</Styledli>
          </NavLink>
          <NavLink exact to="/Partners">
            <Styledli>Partners</Styledli>
          </NavLink>
          <NavLink exact to="/About">
            <Styledli>About</Styledli>
          </NavLink>
          <NavLink exact to="/FAQ">
            <Styledli>FAQ</Styledli>
          </NavLink>
          <a href="https://medium.com/@tedxuw">
            <Styledli>Blog</Styledli>
          </a>

          <li
            style={{ transform: "translate(550px,-40px)", position: "fixed" }}>
            <StyledButton>
              <StyledButtonText>Register Now</StyledButtonText>
            </StyledButton>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Header;
