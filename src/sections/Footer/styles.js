import styled from "styled-components";
import { Container, Grid, GridColumn } from "semantic-ui-react";

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

    color: #ffffff;
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

export const StyledHr = styled.hr`
  &&& {
    transform: translateX(-15px);
    margin-bottom: 32px;
    width: 1040px;
    height: 0px;
    border: 1.59223px solid #3c3c3c;
    color: white;
  }
`;
