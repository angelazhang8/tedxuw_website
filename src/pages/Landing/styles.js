import styled from "styled-components";
import { Container, Grid, GridColumn } from "semantic-ui-react";

export const StyledLandingContainer = styled(Container)`
  &&& {
    position: absolute;
    width: 1004px;
    height: 199px;
    left: 218px;
    top: 447px;
  }
`;

export const StyledTextContainer = styled(Container)`
  &&& {
    width: 745px;
    left: 347px;
    height: 220px;
    top: 852px;
  }
`;

export const StyledMissionTitle = styled.h1`
  &&& {
    color: #fcfcfc;
    font-family: Futura;
    font-size: 150px;
    font-style: normal;
    font-weight: 700;
    line-height: 199px;
    letter-spacing: 0em;
    text-align: left;
    text-shadow: 4px 4px 25px rgba(249, 214, 103, 0.5);
    margin-bottom: 32px;
    margin-top: 48px;
  }
`;

export const StyledStatement = styled.p`
  &&& {
    color: #fcfcfc;
    font-family: Avenir;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const StyledTitle = styled.h2`
  &&& {
    color: white;
    font-family: Futura;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const StyledDescription = styled.p`
  &&& {
    color: #afafaf;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const StyledText = styled.h4`
  &&& {
    /* Heading 1 */

    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const StyledGrid = styled(Grid)`
  &&& {
    margin-top: 16px;
    margin-bottom: 0;
    @media only screen and (max-width: 425px) {
      margin-top: 8px;
    }
  }
`;

export const StyledGridColumn = styled(GridColumn)`
  &&& {
    padding-right: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    margin-bottom: 16px !important;
    &:nth-last-child(-n + 6) {
      margin-bottom: 0 !important;
    }
    @media only screen and (max-width: 425px) {
      &:nth-last-child(n + 3) {
        margin-bottom: 4px !important;
      }
      &:nth-last-child(-n + 2) {
        margin-bottom: 0 !important;
      }
    }
  }
`;

export const StyledSocialContainer = styled(Container)`
  &&& {
    position: absolute;
    margin-bottom: 32px;
    top: 1500px;
  }
`;

export const StyledButtonText = styled.p`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    color: #fcfcfc;
  }
`;
