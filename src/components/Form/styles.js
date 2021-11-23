import styled from "styled-components";
import { Container, Grid, GridColumn, Button } from "semantic-ui-react";

export const StyledButton = styled(Button)`
  &&& {
      border: None;
    width: 103px;
    height: 40px;
    left: 455px;
    top: 164px;
    
    /* Red */
    
    background: #E62B1E;
    border-radius: 0px 3px 3px 0px
  }
`;

export const StyledText = styled(Button)`
  &&& {
      border: none;
    background: #E62B1E;
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
/* identical to box height */


/* White */

color: #FFFFFF;
}
`;