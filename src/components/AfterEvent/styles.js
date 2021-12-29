import React from "react";
import styled from "styled-components";
import { Container, Button, Divider } from "semantic-ui-react";

export const StyledMissionTitle = styled.h1`
  &&& {
    -webkit-text-stroke: 2px #f9d667; /* width and color */

    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 150px;
    // line-height: 199px;

    color: #fcfcfc;

    text-shadow: 4px 4px 25px rgba(249, 214, 103, 0.5);
  }
`;
export const StyledStatement = styled.p`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    // line-height: 44px;
    /* identical to box height */
    color: #ffffff;
  }
`;

export const StyledNotice = styled.p`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    // line-height: 33px;
    /* identical to box height */

    /* Red */

    color: #e62b1e;
  }
`;
export const FeaturedSpeakersText = styled.p`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    // line-height: 42px;
    /* identical to box height */

    color: #ffffff;
  }
`;
export const StyledButtonText = styled.p`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    // line-height: 21px;

    color: #f5f2f2;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    display: inline-flex;
    align-items: center;

    background: #e62b1e;
    border-radius: 100px;

    color: #fcfcfc;
    width: 162px;
    height: 53px;
    text-align: center;
    justify-content: center;
    border: none;

    width: 252px;
    height: 53px;
  }
`;
export const StyledButtonWhite = styled(Button)`
  &&& {
    display: inline-flex;
    align-items: center;
    background: none;
    justify-content: center;
    border: none;

    width: 260px;
    height: 53px;

    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 100px;
  }
`;
