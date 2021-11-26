import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import { Styledli, StyledButtonText, StyledButton } from "./styles";
import tedxuw_logo from "../../res/images/tedxuw_logo.png";
function Header() {
  return (
    <div
      style={{
        color: "white",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        paddingLeft: "0px !important",
        backgroundColor: "black",
        width: "100%",
        zIndex: "10",
      }}>
      <Container
        style={{ width: "1040px", marginLeft: "auto", marginRight: "auto" }}>
        <ul
          style={{
            paddingTop: "35px",
            paddingBottom: "0px",
            display: "flex",
            listStyle: "none",
            height: "50px",
            justifyContent: "space-around",
            backgroundColor: "black",
          }}>
          <li>
            <img
              src={tedxuw_logo}
              style={{
                transform: "translate(-75px,-5px)",
              }}
            />
          </li>
          <Styledli>Speakers</Styledli>
          <Styledli>Partners</Styledli>
          <Styledli>About</Styledli>
          <Styledli>FAQ</Styledli>
          <Styledli>Blog</Styledli>
          <li style={{ transform: "translate(37px,-35px)" }}>
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
