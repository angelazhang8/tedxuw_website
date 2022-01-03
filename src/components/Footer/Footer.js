import React, { Component } from "react";
import { Grid, Image, Container, ImageGroup, Divider } from "semantic-ui-react";

import facebook from "../../res/images/facebook.svg";
import instagram from "../../res/images/instagram.svg";
import linkedin from "../../res/images/linkedin.svg";
import twitter from "../../res/images/twitter.svg";
import outline from "../../res/images/outline.svg";
import "../../grid.min.css";

import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  StyledLink,
  StyledHeading,
  StyledDescription,
  StyledList,
  StyledSubtleLink,
  StyledHr,
  StyledFooterContainer,
  StyledConnectContainer,
  StyledSubtleLink2,
} from "./styles";
import EmailForm from "../../components/EmailForm/EmailForm";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <StyledFooterContainer>
          <StyledHr />
          <div class="ui grid ">
            <div class="row" style={{ columnGap: "80px", alignItems: "left" }}>
              <StyledConnectContainer>
                <Container style={{ textAlign: "left" }}>
                  <StyledHeading>Let's stay connected!</StyledHeading>
                  <StyledDescription>
                    Enter your email to receive the latest news and
                    opportunities from the TEDxUW Community.
                  </StyledDescription>
                  <EmailForm />
                  <Container
                    style={{
                      marginBottom: "33px",
                      marginTop: "34px",
                      marginRight: "auto",
                      color: "white",
                      width: "166px",
                      position: "relative",
                      textAlign: "left",
                    }}>
                    <div class="ui grid" style={{ color: "white" }}>
                      <div class="column">
                        <ImageGroup>
                          <a
                            href="https://www.facebook.com/TEDxUW/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                              style={{ width: "24px" }}
                              alt=""
                              src={facebook}
                              onMouseOut={(e) =>
                                (e.currentTarget.src = facebook)
                              }
                            />
                          </a>
                        </ImageGroup>
                      </div>
                      <div class="column">
                        <ImageGroup>
                          <a
                            href="https://ca.linkedin.com/company/tedxuw"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                              style={{ width: "24px" }}
                              alt=""
                              src={linkedin}
                              onMouseOut={(e) =>
                                (e.currentTarget.src = linkedin)
                              }
                            />
                          </a>
                        </ImageGroup>
                      </div>
                      <div class="column">
                        <ImageGroup>
                          <a
                            href="https://www.instagram.com/tedxuw/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                              style={{ width: "24px" }}
                              alt=""
                              src={instagram}
                              onMouseOut={(e) =>
                                (e.currentTarget.src = instagram)
                              }
                            />
                          </a>
                        </ImageGroup>
                      </div>
                      <div class="column">
                        <ImageGroup>
                          <a
                            href="https://mobile.twitter.com/tedxuw"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                              style={{ width: "24px" }}
                              alt=""
                              src={twitter}
                              onMouseOut={(e) =>
                                (e.currentTarget.src = twitter)
                              }
                            />
                          </a>
                        </ImageGroup>
                      </div>
                    </div>
                  </Container>
                  <StyledDescription>
                    Copyright © 2022 TEDxUW - All Rights Reserved.
                    <br />
                    This independent TEDx event is operated under license from
                    TED.
                  </StyledDescription>
                </Container>
              </StyledConnectContainer>
              <div class="three wide column" className="column1">
                <Container style={{ textAlign: "left" }}>
                  <StyledHeading>Contact</StyledHeading>
                  <StyledLink
                    href="mailto:partnership@tedxuw.com"
                    style={{
                      textDecoration: "underline",
                    }}>
                    partnership@tedxuw.com
                  </StyledLink>
                  <StyledHeading style={{ paddingTop: "1.5rem" }}>
                    Past Websites
                  </StyledHeading>
                  <StyledLink href="http://2020.tedxuw.com/">
                    TEDxUW 2020{" "}
                    <img
                      src={outline}
                      style={{
                        width: "18px",
                        transform: "translate(8px, 4px)",
                      }}
                    />
                    <br />
                  </StyledLink>
                  <StyledLink href="http://2018.tedxuw.com/">
                    TEDxUW 2018{" "}
                    <img
                      src={outline}
                      style={{
                        width: "18px",
                        transform: "translate(8px, 4px)",
                      }}
                    />
                    <br />
                  </StyledLink>
                  <StyledLink href="https://tedxuw.github.io/2017/">
                    TEDxUW 2017{" "}
                    <img
                      src={outline}
                      style={{
                        width: "18px",
                        transform: "translate(8px, 4px)",
                      }}
                    />
                    <br />
                  </StyledLink>
                  <StyledLink href="https://tedxuw.github.io/2016/">
                    TEDxUW 2016{" "}
                    <img
                      src={outline}
                      style={{
                        width: "18px",
                        transform: "translate(8px, 4px)",
                      }}
                    />
                    <br />
                  </StyledLink>
                </Container>
              </div>
              <div class="two wide column">
                <Container style={{ textAlign: "left" }}>
                  <StyledHeading>Navigate</StyledHeading>
                  <StyledSubtleLink exact to="/">
                    Home
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink exact to="/Speakers">
                    Speakers
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink exact to="/Partners">
                    Partners
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink exact to="/About">
                    About
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink exact to="/Faq">
                    FAQ
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink2 href="https://medium.com/@tedxuw">
                    Blog
                    <br />
                  </StyledSubtleLink2>
                </Container>
              </div>
            </div>
          </div>
        </StyledFooterContainer>
      </div>
    );
  }
}

export default Footer;
