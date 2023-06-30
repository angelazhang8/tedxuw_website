import React, { Component } from "react";
import { Grid, Image, Container, ImageGroup, Divider } from "semantic-ui-react";

import facebook from "../../res/images/2023/facebook-logo.svg";
import instagram from "../../res/images/2023/instagram-logo.svg";
import linkedin from "../../res/images/2023/linkedin-logo.svg";
import twitter from "../../res/images/2023/twitter-logo.svg";
import youtube from "../../res/images/2023/youtube-logo.svg";
import stump from "../../res/images/2023/stump.svg";
import logo from "../../res/images/2023/tedxuw2023.svg"

import "../../grid.min.css";

import "./Footer.css";

import {
  StyledLink,
  StyledHeading,
  StyledDescription,
  StyledList,
  StyledSubtleLink,
  StyledHr,
  StyledFooterContainer,
  SocialMediaButton,
  SocialMediaRow,
  License,
  StyledConnectContainer,
} from "./styles";

// import EmailForm from "./../components/EmailForm/EmailForm";

class Footer extends Component {
  render() {
    return (
      <StyledFooterContainer>
        <footer id='footer'>
          <div id="logo">
            <img id="tedxuw" src={logo} alt="TedXUW Logo" />
            <img id="stump" src={stump} alt="Tree Stump" />
          </div>
          <div id="past-website-links">
            <h3 className="footer-heading">Past Websites</h3>
            <ul>
              <li><a href="">2020 Vision</a></li>
              <li><a href="">Making Waves 2018</a></li>
              <li><a href="">Defying Conventions 2017</a></li>
              <li><a href="">TEDxUW 2016</a></li>
            </ul>
          </div>
          <div id="contact-us">
            <h3 className="footer-heading">Contact Us</h3>
            <ul id="contact-details">
              <li className="contact-row">
                <span class="contact-method">Email:</span>
                <span class="contact-value">outreach@tedxuw.com</span>
              </li>
            </ul>
          </div>
          <div id="social-links">
          <h3 className="footer-heading">Social</h3>
            <SocialMediaRow>
              <SocialMediaButton>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <img src={facebook} alt="Facebook" />
                </a>
              </SocialMediaButton>
              <SocialMediaButton>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <img src={instagram} alt="Instagram" />
                </a>
              </SocialMediaButton>
              <SocialMediaButton>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                  <img src={twitter} alt="Twitter" />
                </a>
              </SocialMediaButton>
              <SocialMediaButton>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </SocialMediaButton>
              <SocialMediaButton>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                  <img src={youtube} alt="YouTube" />
                </a>
              </SocialMediaButton>
            </SocialMediaRow>
          </div>
        </footer>
        <License>
            <p>Copyright © 2023 TEDxUW - All Rights Reserved.</p>
            <p>This independent TEDx event is operated under license from TED.</p>
        </License>
      </StyledFooterContainer>
    );
  }
}




export default Footer;
