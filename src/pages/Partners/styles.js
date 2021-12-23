import styled from "styled-components";
import { Container, Grid, GridColumn, Button, Form } from "semantic-ui-react";

export const StyledRedHeader = styled.h3`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    // line-height: 32px;
    /* identical to box height */

    color: #ff1a0a;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
`;

export const StyledMainHeader = styled.h3`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    // line-height: 85px;
    /* identical to box height */

    color: #ffffff;
    margin-top: 16px;
    margin-bottom: 0px;
  }
`;

export const StyledHeaderDescription = styled.h3`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    /* identical to box height */

    /* Dark White */

    color: #e0e0e0;
    margin-top: 32px;
  }
`;
