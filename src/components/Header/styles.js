import styled from "styled-components";
import { Container, Grid, GridColumn, Button, Form } from "semantic-ui-react";

export const Styledli = styled.li`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    text-decoration: none;
    color: #fcfcfc;
    position: fixed;
    transform: translate(80px, -5px);
  }
`;
export const StyledButtonText = styled.p`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #747474;
    padding-top: 16px;
  }
`;
export const StyledButton = styled.p`
  &&& {
    width: 162px;
    height: 53px;
    padding: 0px !important;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.49)),
      #e62b1e;
    border-radius: 100px;
  }
`;
export const StyledNavContainer = styled(Container)`
  &&& {
    width: 1040px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;
