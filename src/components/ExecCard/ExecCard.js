import React, { useEffect, useState, Component } from "react";
import {
  StyledName,
  StyledPosition,
  StyledDescription,
  StyledCollapseText,
} from "./styles";
import { Container, ImageGroup } from "semantic-ui-react";
import linkedin from "../../res/images/linkedin_red.svg";
import forward from "../../res/images/forward.svg";
import { Icon } from "semantic-ui-react";

class ExecCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      description: props.description,
      itemsToShow: "",
      expanded: false,
    };
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === ""
      ? this.setState({ itemsToShow: this.state.description, expanded: true })
      : this.setState({ itemsToShow: "", expanded: false });
  }
  render() {
    return (
      <Container style={{ width: "270px" }}>
        <img src={this.props.img} style={{ width: "235px" }} />
        <Container
          style={{
            textAlign: "left",
          }}>
          <StyledName>
            {this.props.name}
            <a
              href={this.props.linkedin}
              target="_blank"
              rel="noopener noreferrer">
              <img
                style={{ width: "24px", transform: "translate(14px)" }}
                alt=""
                src={linkedin}
                onMouseOut={(e) => (e.currentTarget.src = linkedin)}
              />
            </a>
          </StyledName>

          <StyledPosition>{this.props.position}</StyledPosition>
          <StyledDescription>{this.state.itemsToShow}</StyledDescription>
          <a onClick={this.showMore}>
            {this.state.expanded ? (
              <span>
                <StyledCollapseText>Show less</StyledCollapseText>
              </span>
            ) : (
              <span>
                <StyledCollapseText>
                  Read more
                  <img
                    src={forward}
                    style={{ width: "18px", transform: "translate(8px, 4px)" }}
                  />
                </StyledCollapseText>
              </span>
            )}
          </a>
        </Container>
      </Container>
    );
  }
}
export default ExecCard;
