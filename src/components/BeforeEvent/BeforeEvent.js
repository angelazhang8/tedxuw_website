import React from "react";
import {
  StyledMissionTitle,
  StyledStatement,
  StyledButtonText,
} from "./styles";
import { Container, Button, Divider } from "semantic-ui-react";
import collage1 from "../../res/images/collage1.png";
import Time from "../Time/Time";
import { Link } from "react-scroll";

class BeforeEvent extends React.Component {
  render() {
    return (
      <div>
        <Container
          text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
            width: "1004px",
            position: "relative",
            textAlign: "left",
            paddingTop: "80px",
          }}>
          <Time />
          <StyledMissionTitle>2020 Vision.</StyledMissionTitle>
        </Container>
        <Link to="footer" smooth={true} spy={true}>
          <Button
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#E62B1E",
              borderRadius: "100px",
              color: "#FCFCFC",
              width: "272px",
              height: "45px",
              textAlign: "center",
              justifyContent: "center",
              border: "none",
            }}>
            <Divider hidden style={{ height: "150px" }} />
            <StyledButtonText>Sign Up for Email Reminders</StyledButtonText>
          </Button>
        </Link>

        <Container
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
            // width: "1440px",
            width: "100%",
            position: "relative",
            textAlign: "left",
          }}>
          <div
            style={{
              // width: "1440px",
              width: "100%",
              height: "299px",
              backgroundImage: `url(${collage1})`,
            }}>
            <Container
              text
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                color: "white",
                width: "745px",
                position: "relative",
                textAlign: "left",
              }}>
              <StyledStatement style={{ paddingTop: "29px" }}>
                2020 marked the start of an incredibly difficult time period. It
                is easy to say that hindsight is 2020, but we do not live in the
                past and unfortunately can’t change the present — what we can do
                is learn, grow, and look toward the future with 20/20 vision.
              </StyledStatement>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}
export default BeforeEvent;
