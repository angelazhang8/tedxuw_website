import React, { Component } from "react";
import { Grid, Image, Container, ImageGroup } from "semantic-ui-react";

import facebook from "../../res/images/facebook.png";
import instagram from "../../res/images/instagram.png";
import linkedin from "../../res/images/linkedin.png";
import twitter from "../../res/images/twitter.png";
import "../../grid.min.css";
import {
  StyledLink,
  StyledHeading,
  StyledDescription,
  StyledList,
  StyledSubtleLink,
} from "./styles";
import EmailForm from "../../components/EmailForm/EmailForm";
class Footer extends Component {
  render() {
    return (
      <Container
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "1040px",
          height: "384px",
          background: "black",
        }}>
        <div class="ui grid ">
          <div class="row" style={{ columnGap: "80px", alignItems: "left" }}>
            <div class="seven wide column">
              <Container style={{ textAlign: "left" }}>
                <StyledHeading>Let's stay connected!</StyledHeading>
                <StyledDescription>
                  Enter your email to receive the latest news and opportunities
                  from the TEDxUW Community.
                </StyledDescription>
                <EmailForm />
                <Container
                  style={{
                    marginBottom: "33px",
                    marginTop: "34px",
                    marginLeft: "0",
                    marginRight: "auto",
                    color: "white",
                    width: "166px",
                    position: "relative",
                    textAlign: "left",
                  }}>
                  <div class="ui  grid" style={{ color: "white" }}>
                    <div class="column">
                      <ImageGroup>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <img
                            style={{ width: "24px" }}
                            alt=""
                            src={facebook}
                            onMouseOut={(e) => (e.currentTarget.src = facebook)}
                          />
                        </a>
                      </ImageGroup>
                    </div>
                    <div class="column">
                      <ImageGroup>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <img
                            style={{ width: "24px" }}
                            alt=""
                            src={linkedin}
                            onMouseOut={(e) => (e.currentTarget.src = linkedin)}
                          />
                        </a>
                      </ImageGroup>
                    </div>
                    <div class="column">
                      <ImageGroup>
                        <a
                          href="https://www.instagram.com/"
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
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <img
                            style={{ width: "24px" }}
                            alt=""
                            src={twitter}
                            onMouseOut={(e) => (e.currentTarget.src = twitter)}
                          />
                        </a>
                      </ImageGroup>
                    </div>
                  </div>
                </Container>

                <StyledDescription>
                  Copyright © 2020 TEDxUW - All Rights Reserved.
                  <br />
                  This independent TEDx event is operated under license from
                  TED.
                </StyledDescription>
              </Container>
            </div>
            <div class="three wide column">
              <Container style={{ textAlign: "left" }}>
                <StyledHeading>Contact</StyledHeading>
                <StyledLink href="to:partnership@tedxuw.com">
                  partnership@tedxuw.com
                </StyledLink>
                <StyledHeading>Past Websites</StyledHeading>
                <StyledLink href="partnership@tedxuw.com">
                  TEDxUW 2018
                  <br />
                </StyledLink>
                <StyledLink href="partnership@tedxuw.com">
                  TEDxUW 2017
                  <br />
                </StyledLink>
                <StyledLink href="partnership@tedxuw.com">
                  TEDxUW 2016
                  <br />
                </StyledLink>
              </Container>
            </div>
            <div class="two wide column">
              <Container style={{ textAlign: "left" }}>
                <StyledHeading>Navigate</StyledHeading>
                <StyledSubtleLink href="partnership@tedxuw.com">
                  Home
                  <br />
                </StyledSubtleLink>
                <StyledSubtleLink href="partnership@tedxuw.com">
                  Speakers
                  <br />
                </StyledSubtleLink>
                <StyledSubtleLink href="partnership@tedxuw.com">
                  Partners
                  <br />
                </StyledSubtleLink>
                <StyledSubtleLink href="partnership@tedxuw.com">
                  About
                  <br />
                </StyledSubtleLink>
                <StyledSubtleLink href="partnership@tedxuw.com">
                  Blog
                  <br />
                </StyledSubtleLink>
                <StyledSubtleLink href="partnership@tedxuw.com">
                  FAQ
                  <br />
                </StyledSubtleLink>
              </Container>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Footer;
