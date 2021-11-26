import styled from "styled-components";
import { Container, Grid, GridColumn } from "semantic-ui-react";

export const StyledDigit = styled.div`
  &&& {
    background: #242424;
    box-shadow: 0px 6px 10px rgba(244, 213, 120, 0.05),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 72px;
    height: 133px;
    display: flex;
    flex-direction: column;

    display: flex;
    align-items: center;
  }
`;

export const StyledTimeUnit = styled.h1`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 85px;
    /* identical to box height */
    color: #fcfcfc;
    transform: translateY(-50%);
  }
`;

export const StyledCaption = styled.h1`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    /* identical to box height */

    color: #fcfcfc;
  }
`;
