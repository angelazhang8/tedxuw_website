import React from "react";
import {
  StyledLandingContainer,
  StyledMissionTitle,
  StyledStatement,
  StyledTitle,
  StyledDescription,
  StyledText,
  StyledTextContainer,
  StyledTextContainer2,
  StyledSocialContainer,
  StyledGridColumn,
  StyledGrid,
} from "./styles";
import { GridColumn, ImageGroup } from "semantic-ui-react";
import Date from "../../components/Time/Time";

import facebook from "../../res/images/facebook.png";
import instagram from "../../res/images/instagram.png";
import linkedin from "../../res/images/linkedin.png";
import twitter from "../../res/images/twitter.png";

// Landing page component
function Landing() {
  //Functions to track clicks
  return (
    <div>
      <StyledLandingContainer>
        <StyledMissionTitle>2020 Vision.</StyledMissionTitle>
        <StyledTextContainer>
          <StyledStatement>
            2020 marked the start of an incredibly difficult time period. It is
            easy to say that hindsight is 2020, but we do not live in the past
            and unfortunately can’t change the present — what we can do is
            learn, grow, and look toward the future with 20/20 vision.
          </StyledStatement>
        </StyledTextContainer>
        <StyledTitle>What is TEDx?</StyledTitle>
        <StyledTextContainer2>
          <StyledDescription>
            In the spirit of ideas worth spreading, TED has created a program
            called TEDx.
          </StyledDescription>
          <StyledDescription>
            TEDx is a program of local, self-organized events that bring people
            together to share a TED-like experience. Our event is called TEDxUW,
            where x = independently organized TED event. At our TEDxUW, TED
            Talks video and live speakers will combine to spark deep discussion
            and connection in a small group. The TED Conference provides general
            guidance for the TEDx program, but individual TEDx events, including
            ours, are self-organized.
          </StyledDescription>
        </StyledTextContainer2>

        <StyledTitle>What is TEDxUW?</StyledTitle>
        <StyledTextContainer2>
          <StyledDescription>
            <span
              style={{
                color: "white",
                fontFamily: "Avenir",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "24px",
                lineHeight: "33px",
                textAlign: "left",
              }}>
              Founded in 2011
            </span>
            , TEDxUW is the University of Waterloo's official TEDx experience.
            It is one in a series of 3,000+ events being held worldwide as part
            of the international TED movement to create open platforms for
            riveting ideas to be shared with the world. The diverse group of
            students, faculty, and alumni learn from one another, both as
            speakers and as attendees, and leave the conference driven to
            creatively and collectively improve our future.
          </StyledDescription>
          <StyledDescription>
            <span
              style={{
                color: "white",
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
            and achievements to a global audience. With TEDxUW talks published
            on TED.com and amassing over 5 million views on YouTube, TEDxUW
            sparks innovation across the globe starting at the University of
            Waterloo.
          </StyledDescription>
          <StyledDescription>
            <span
              style={{
                color: "white",
                fontFamily: "Avenir",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "24px",
                lineHeight: "33px",
                textAlign: "left",
              }}>
              At the University of Waterloo
            </span>
            , ideas are a part of who we are. Both on and off campus, we
            cultivate and apply diverse, multidisciplinary ideas in a variety of
            fields. Hosting a TEDx conference each year is our distinct way of
            supporting and encouraging the “ideas worth spreading” philosophy.
            Our goal is to highlight the collective contributions of our
            university to a global society, simultaneously championing the
            University of Waterloo as a community where great minds and big
            ideas always meet. TEDxUW strives to position the University and its
            extended community on an international activity platform that is
            being watched, shared and talked about by the world’s top thinkers,
            thought leaders, businessmen, problem-solvers, entrepreneurs,
            writers, activists, and change-makers.
          </StyledDescription>
          <StyledStatement>
            “There aren’t many times I’d say I’d be willing to travel 18 hours
            to go to a 7 hour conference but I’d do this again in a heartbeat.”
            - 2017 TEDxUW Delegate
          </StyledStatement>
          <StyledText>Follow us on Social Media!</StyledText>
        </StyledTextContainer2>
        <StyledGrid column={4}>
          <StyledGridColumn>
            <ImageGroup>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  alt=""
                  src={facebook}
                  onMouseOut={(e) => (e.currentTarget.src = facebook)}
                />
              </a>
            </ImageGroup>
          </StyledGridColumn>
          <StyledGridColumn>
            <ImageGroup>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  alt=""
                  src={linkedin}
                  onMouseOut={(e) => (e.currentTarget.src = linkedin)}
                />
              </a>
            </ImageGroup>
          </StyledGridColumn>
          <ImageGroup>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                alt=""
                src={instagram}
                onMouseOut={(e) => (e.currentTarget.src = instagram)}
              />
            </a>
          </ImageGroup>
          <ImageGroup>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                alt=""
                src={twitter}
                onMouseOut={(e) => (e.currentTarget.src = twitter)}
              />
            </a>
          </ImageGroup>
        </StyledGrid>
      </StyledLandingContainer>
    </div>
  );
}

export default Landing;
