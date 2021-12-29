import React from "react";
import {
  StyledLandingContainer,
  StyledMissionTitle,
  StyledStatement,
  StyledTitle,
  StyledDescription,
  StyledText,
  StyledButtonText,
} from "./styles";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";
import facebook from "../../res/images/facebook.svg";
import instagram from "../../res/images/instagram.svg";
import linkedin from "../../res/images/linkedin.svg";
import twitter from "../../res/images/twitter.svg";
import collage2 from "../../res/images/collage2.png";
import attendees from "../../res/images/attendees.png";
import { Link } from "react-scroll";
import "../../grid.min.css";
import Header from "../../components/Header/Header";
import BeforeEvent from "../../components/BeforeEvent/BeforeEvent";
import DuringEvent from "../../components/DuringEvent/DuringEvent";
import AfterEvent from "../../components/AfterEvent/AfterEvent";
// Landing page component
function Landing() {
  //Functions to track clicks
  return (
    <div style={{ background: "black" }}>
      <Header color="black" />
      {/* <BeforeEvent />
      <DuringEvent /> */}
      <AfterEvent />
      <Container
        text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          width: "745px",
          position: "relative",
          textAlign: "left",
          marginTop: "90px",
        }}>
        <StyledTitle>What is TEDx?</StyledTitle>
      </Container>
      <div
        style={{
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
          transform: "translate(-110%, -100%)",
          // transform: "translate(-18vw, -100%)",
          color: "white",
          width: "243px",
          borderBottom: "15px solid #e62b1e",
        }}></div>
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
        <StyledDescription>
          In the spirit of ideas worth spreading, TED has created a program
          called&nbsp;
          <a
            style={{ color: "#e62b1e" }}
            href="https://www.ted.com/about/programs-initiatives/tedx-program">
            TEDx
          </a>
          .
        </StyledDescription>
        <StyledDescription style={{ marginBottom: "100px" }}>
          TEDx is a program of local, self-organized events that bring people
          together to share a TED-like experience. Our event is called TEDxUW,
          where x = independently organized TED event. At our TEDxUW, TED Talks
          video and live speakers will combine to spark deep discussion and
          connection in a small group. The TED Conference provides general
          guidance for the TEDx program, but individual TEDx events, including
          ours, are self-organized.
        </StyledDescription>
        <StyledTitle>What is TEDxUW?</StyledTitle>
        <div
          style={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            transform: "translate(-78.3%, -100%)",
            // transform: "translate(-16vw, -100%)",
            color: "white",
            width: "303px",
            borderBottom: "15px solid #e62b1e",
          }}></div>
        <StyledDescription style={{ marginBottom: "30px" }}>
          <span
            style={{
              color: "#afafaf",
              fontFamily: "Avenir",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "24px",
              lineHeight: "33px",
              textAlign: "left",
            }}>
            Founded in 2011
          </span>
          , TEDxUW is the University of Waterloo's official TEDx experience. It
          is one in a series of 3,000+ events being held worldwide as part of
          the international TED movement to create open platforms for riveting
          ideas to be shared with the world. The diverse group of students,
          faculty, and alumni learn from one another, both as speakers and as
          attendees, and leave the conference driven to creatively and
          collectively improve our future.
        </StyledDescription>
        <StyledDescription style={{ marginBottom: "30px" }}>
          <span
            style={{
              color: "#afafaf",
              fontFamily: "Avenir",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "24px",
              lineHeight: "33px",
              textAlign: "left",
            }}>
            Our mission
          </span>
          &nbsp; is to bring together intelligent, talented and energetic
          members within the University of Waterloo community to foster an
          environment in which change-makers are able to showcase their ideas
          and achievements to a global audience. With TEDxUW talks published on
          TED.com and amassing over 5 million views on YouTube, TEDxUW sparks
          innovation across the globe starting at the University of Waterloo.
        </StyledDescription>
        <StyledDescription>
          <span
            style={{
              color: "#afafaf",
              fontFamily: "Avenir",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "24px",
              lineHeight: "33px",
              textAlign: "left",
            }}>
            At the University of Waterloo
          </span>
          , ideas are a part of who we are. Both on and off campus, we cultivate
          and apply diverse, multidisciplinary ideas in a variety of fields.
          Hosting a TEDx conference each year is our distinct way of supporting
          and encouraging the “ideas worth spreading” philosophy. Our goal is to
          highlight the collective contributions of our university to a global
          society, simultaneously championing the University of Waterloo as a
          community where great minds and big ideas always meet. TEDxUW strives
          to position the University and its extended community on an
          international activity platform that is being watched, shared and
          talked about by the world’s top thinkers, thought leaders,
          businessmen, problem-solvers, entrepreneurs, writers, activists, and
          change-makers.
        </StyledDescription>
      </Container>
      <Container
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "126px",
          color: "white",
          // width: "1440px",
          width: "100%",
          position: "relative",
          textAlign: "left",
        }}>
        <div
          style={{
            width: "100%",
            height: "324.41px",
            backgroundImage: `url(${collage2})`,
            marginBottom: "100px",
          }}>
          <Container
            text
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
              width: "1040px",
              position: "relative",
              textAlign: "left",
              transform: "translate(50px, -10px)",
              alignItems: "center",
            }}>
            <div class="ui grid">
              <div
                class="row"
                style={{ columnGap: "60px", alignItems: "center" }}>
                <div class="five wide column">
                  <img
                    src={attendees}
                    style={{
                      width: "332px",
                      height: "221.72px",
                      left: "284px",
                      top: "2270px",
                    }}
                  />
                </div>
                <div class="seven wide column">
                  <StyledStatement>
                    “There aren’t many times I’d say I’d be willing to travel 18
                    hours to go to a 7 hour conference but I’d do this again in
                    a heartbeat.”
                  </StyledStatement>
                  <StyledStatement> - 2017 TEDxUW Delegate</StyledStatement>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
      <StyledText style={{ textAlign: "center" }}>
        Follow us on Social Media!
      </StyledText>
      <Container
        style={{
          marginTop: "32px",
          marginBottom: "100px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          width: "420px",
          position: "relative",
          textAlign: "left",
        }}>
        <div class="ui relaxed grid" style={{ color: "white" }}>
          <div class="column" style={{ marginRight: "42px" }}>
            <ImageGroup>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  style={{ width: "57px" }}
                  alt=""
                  src={facebook}
                  onMouseOut={(e) => (e.currentTarget.src = facebook)}
                />
              </a>
            </ImageGroup>
          </div>
          <div class="column" style={{ marginRight: "42px" }}>
            <ImageGroup>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  style={{ width: "57px" }}
                  alt=""
                  src={linkedin}
                  onMouseOut={(e) => (e.currentTarget.src = linkedin)}
                />
              </a>
            </ImageGroup>
          </div>
          <div class="column" style={{ marginRight: "42px" }}>
            <ImageGroup>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  style={{ width: "57px" }}
                  alt=""
                  src={instagram}
                  onMouseOut={(e) => (e.currentTarget.src = instagram)}
                />
              </a>
            </ImageGroup>
          </div>
          <div class="column">
            <ImageGroup>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  style={{ width: "57px" }}
                  alt=""
                  src={twitter}
                  onMouseOut={(e) => (e.currentTarget.src = twitter)}
                />
              </a>
            </ImageGroup>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Landing;
