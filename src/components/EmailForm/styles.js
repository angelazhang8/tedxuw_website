import styled from "styled-components";
import { Container, Grid, GridColumn, Button, Form } from "semantic-ui-react";

export const StyledButton = styled(Button)`
  &&& {
    border: None;
    width: 103px;
    height: 38px;
    left: 455px;
    top: 164px;

    /* Red */
    vertical-align: center;
    background: #e62b1e;
    border-radius: 0px 3px 3px 0px;
  }
`;

export const StyledText = styled(Button)`
  &&& {
    border: none;
    background: #e62b1e;
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    /* White */

    color: #ffffff;
  }
`;

export const StyledInput = styled.input`
  &&& {
    caret-color: #afafaf;
    border: none;
    background: #e62b1e;
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    /* White */
  }
`;
