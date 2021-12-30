import React, { useEffect, useState, Component } from "react";
import { Container, ImageGroup } from "semantic-ui-react";
import {
  StyledName,
  StyledPosition,
  StyledDescription,
  StyledCollapseText,
} from "./styles";
import Truncate from "react-truncate";
import PropTypes from "prop-types";
import down from "../../res/images/down2.svg";
import up from "../../res/images/up.svg";

class SpeakerCard extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      expanded: false,
      truncated: false,
    };

    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated,
      });
    }
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const { children, more, less, lines } = this.props;
    const { expanded, truncated } = this.state;
    return (
      <div class="ui grid">
        <div
          class="row"
          style={{ verticalAlign: "middle", alignItems: "center" }}>
          <div
            class="five wide column"
            style={{
              position: "left",
              justifyItems: "left",
              marginRight: "32px",
            }}>
            <img
              style={{
                width: "362px",
                marginBottom: "20px",
                marginTop: "20px",
                borderRadius: "181px"
              }}
              src={this.props.img}
            />
          </div>
          <div class="eight wide column">
            <Container
              style={{
                textAlign: "left",
                width: "574px",
                transform: "translateX(-20px)",
              }}>
              <StyledName>{this.props.name}</StyledName>
              <StyledPosition>{this.props.talk_name}</StyledPosition>
              <StyledDescription>
                <Truncate
                  lines={!expanded && lines}
                  ellipsis={
                    <span>
                      ...{" "}
                      <a href="#" onClick={this.toggleLines}>
                        {more}
                      </a>
                    </span>
                  }
                  onTruncate={this.handleTruncate}>
                  <StyledDescription>
                    {this.props.description}
                  </StyledDescription>
                </Truncate>
                {!truncated && expanded && (
                  <span>
                    {" "}
                    <a href="#" onClick={this.toggleLines}>
                      {less}
                    </a>
                  </span>
                )}
              </StyledDescription>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

SpeakerCard.defaultProps = {
  lines: 2,
  more: (
    <StyledCollapseText>
      Read More
      <img
        src={down}
        style={{ width: "24px", transform: "translate(16px, 8px)" }}
      />
    </StyledCollapseText>
  ),
  less: (
    <StyledCollapseText>
      Read Less
      <img
        src={up}
        style={{ width: "24px", transform: "translate(16px, 8px)" }}
      />
    </StyledCollapseText>
  ),
};

SpeakerCard.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string,
};

export default SpeakerCard;
