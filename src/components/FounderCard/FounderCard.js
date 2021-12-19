import React, { useEffect, useState, Component } from "react";
import { StyledName, StyledPosition, StyledDescription } from "./styles";
import { Container, ImageGroup } from "semantic-ui-react";
import linkedin from "../../res/images/linkedin.svg";

class FounderCard extends React.Component {
  render() {
    return (
      <div class="ui grid ">
        <div
          class="row"
          style={{
            alignItems: "center",
          }}>
          <div
            class="four wide column"
            style={{
              position: "left",
              justifyItems: "left",
              marginRight: "20px",
              transform: "translateX(-20px)",
            }}>
            <img style={{ width: "235px" }} src={this.props.img} />
          </div>
          <div class="eight wide column">
            <Container
              style={{
                textAlign: "left",
                width: "574px",
              }}>
              <StyledName>{this.props.name}</StyledName>
              <StyledPosition>
                {this.props.position}
                <a
                  href={this.props.linkedin}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    style={{ width: "24px", transform: "translate(14px, 4px)" }}
                    alt=""
                    src={linkedin}
                    onMouseOut={(e) => (e.currentTarget.src = linkedin)}
                  />
                </a>
              </StyledPosition>
              <StyledDescription>{this.props.description}</StyledDescription>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
export default FounderCard;
