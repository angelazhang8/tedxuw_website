import React from "react";
import {
  StyledMissionTitle,
  StyledStatement,
  StyledNotice,
  StyledButtonText,
  StyledButton,
  StyledButtonWhite,
  StyledContainer,
  StyledButtonDiv,
  StyledButtonContainer,
} from "./styles";
import LandingPageComponent from "../LandingPageComponent/LandingPageComponent";
import { Link } from "react-scroll";

class AfterEvent extends React.Component {
  render() {
    return (
      <div>
        <StyledContainer>
          <StyledMissionTitle>2020 Vision.</StyledMissionTitle>
          <StyledStatement>
            Our event is now over. See you next year!
          </StyledStatement>
          <StyledNotice style={{ transform: "translateY(-105px)" }}>
            Feel free to checkout our speakers on Youtube!
          </StyledNotice>
          <StyledButtonDiv>
            <span>
              <a style={{ textDecoration: "none", paddingRight: "24px" }}>
                <Link to="footer" smooth={true} spy={true}>
                  <StyledButtonWhite style={{ transform: "translateY(-65px)" }}>
                    <StyledButtonText>
                      Sign Up for our Newsletter
                    </StyledButtonText>
                  </StyledButtonWhite>
                </Link>
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLHfzGSH2ucEirMznxU5kXUO6TUK3FYnyO"
                style={{ textDecoration: "none" }}>
                <StyledButton style={{ transform: "translateY(-65px)" }}>
                  <StyledButtonText>Watch Videos on Youtube</StyledButtonText>
                </StyledButton>
              </a>
            </span>
          </StyledButtonDiv>

          <StyledButtonContainer>
            <div style={{ paddingBottom: "1rem" }}>
              <a style={{ textDecoration: "none" }}>
                <Link to="footer" smooth={true} spy={true}>
                  <StyledButtonWhite>
                    <StyledButtonText>
                      Sign Up for our Newsletter
                    </StyledButtonText>
                  </StyledButtonWhite>
                </Link>
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/playlist?list=PLHfzGSH2ucEirMznxU5kXUO6TUK3FYnyO"
                style={{ textDecoration: "none" }}>
                <StyledButton>
                  <StyledButtonText>Watch Videos on Youtube</StyledButtonText>
                </StyledButton>
              </a>
            </div>
          </StyledButtonContainer>
        </StyledContainer>
        <LandingPageComponent />
      </div>
    );
  }
}

export default AfterEvent;
