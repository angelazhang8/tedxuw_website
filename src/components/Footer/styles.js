import styled from "styled-components";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import column1 from "./Footer";

export const StyledLink = styled.a`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-decoration-line: underline;

    /* Red */

    color: #e62b1e;
  }
`;

export const StyledHeading = styled.h1`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    color:#000000;
    ;
  }
`;

export const StyledDescription = styled.h1`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    /* Light Grey */

    color: #afafaf;
  }
`;

export const StyledSubtleLink = styled.a`
  &&& {
    text-decoration: none;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    /* Light Grey */

    color: #afafaf;
  }
`;

export const StyledFooterContainer = styled(Container)`
  #logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  #tedxuw {
    width: 275px; 
    padding-bottom: 50px;

  }

  #stump {
    width: 250px;  
  }

  footer {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 70px 210px 70px 40px;
    margin: 0px;
    background: white;
    height: 384px;
  }

  footer > div {
    padding: 20px;
    text-align: center;
    background-color: white;
  }

  .footer-heading {
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    margin-bottom: 30px;
  }

  #2nd-row {
    display: grid;
    grid-template-columns: 1fr;
  }

  #contact-details {
    width: 100%;
    list-style: none; /* Remove bullet points */
    padding: 0; /* Remove padding */
  }
  
  .contact-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px; /* Add space between rows */
  }
  
  .contact-method {
    text-align: left;
  }
  
  .contact-value {
    text-align: right;
    color: #C73F39;
    text-decoration: underline;
    font-weight: bold;
  }

  #past-website-links {
    ul {
      list-style: none;  /* remove bullet points */
      padding: 0px; /* remove default padding from list */
      
      li {
        font-family: Helvetica;
        font-size: 14px;
        color: #C73F39;
        text-align: left;
        line-height: 30px;

        a {
          text-decoration: none;  /* remove underline from links */
          color: inherit;  /* make the link color inherit from the parent (li) */
        }
      }
    }
  }

`;

export const SocialMediaRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SocialMediaButton = styled.button`
  background: transparent;
  border: none;
`;


export const License = styled.div`
  font-style: italic;
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  color: lightgray;
  background-color: black;

`;

// &&& {
//   align-items: center;
//   width: 100%;
//   overflow-x: hidden;
//   height: 384px;
//   background: white;
//   border-bottom-left-radius: 10px;
//   border-bottom-right-radius: 10px;
//   @media (max-width: 1100px) {
//     justify-items: center;
//     width: 90%;
//     padding: 1rem;
//   }
// }

export const StyledHr = styled.hr`
  &&& {
    transform: translateX(-15px);
    margin-bottom: 32px;
    width: 1040px;
    height: 0px;
    border: 1.59223px solid #3c3c3c;
    background-color: #3c3c3c;
    @media (max-width: 1040px) {
      width: calc(100% + 20px);
    }
  }
`;

export const StyledConnectContainer = styled.div`
  &&& {
    width: 490px;
    @media (max-width: 490px) {
      width: 100%;
    }
  }
`;
