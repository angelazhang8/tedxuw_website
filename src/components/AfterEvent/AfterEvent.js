import React from "react";
import {
  StyledMissionTitle,
  StyledStatement,
  StyledNotice,
  StyledButtonText,
  StyledButton,
  FeaturedSpeakersText,
  StyledButtonWhite,
} from "./styles";
import { Container, Button, Divider } from "semantic-ui-react";
import collage1 from "../../res/images/collage1.png";
import tedxuw_logo_2022 from "../../res/images/tedxuw_logo_2022.png";

import thomas_lenhard from "../../res/images/speakers/thomas_lenhard.png";
import andrew_guy from "../../res/images/speakers/andrew_guy.png";
import anh_le from "../../res/images/speakers/anh_le.png";
import karandeep_gill from "../../res/images/speakers/karandeep_gill.png";
import iman_salehi from "../../res/images/speakers/iman_salehi.png";
import chris_costa from "../../res/images/speakers/chris_costa.png";
import tanner_philp from "../../res/images/speakers/tanner_philp.png";
import ExecCard from "../ExecCard/ExecCard";

class AfterEvent extends React.Component {
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
            textAlign: "center",
            paddingTop: "80px",
          }}>
          <StyledMissionTitle>2020 Vision.</StyledMissionTitle>
          <StyledStatement
            style={{
              marginTop: "0px",
              paddingTop: "0px",
              transform: "translateY(-85px)",
            }}>
            Our event is now over. See you next year!
          </StyledStatement>
          <StyledNotice style={{ transform: "translateY(-105px)" }}>
            Feel free to checkout our speakers on Youtube!
          </StyledNotice>
          <div style={{ transform: "translateY(-25px)" }}>
            <span>
              <a
                href="https://www.google.com"
                style={{ textDecoration: "none", paddingRight: "24px" }}>
                <StyledButtonWhite style={{ transform: "translateY(-65px)" }}>
                  <StyledButtonText>
                    Sign Up for our Newsletter
                  </StyledButtonText>
                </StyledButtonWhite>
              </a>

              <a
                href="https://www.google.com"
                style={{ textDecoration: "none" }}>
                <StyledButton style={{ transform: "translateY(-65px)" }}>
                  <StyledButtonText>Watch Videos on Youtube</StyledButtonText>
                </StyledButton>
              </a>
            </span>
          </div>
        </Container>
        <div
          style={{
            // width: "1440px", paddingTop: "0px",
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
        <FeaturedSpeakersText style={{ marginTop: "100px" }}>
          Featured Speakers
        </FeaturedSpeakersText>
        <div
          class="ui grid"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "1040px",
            marginTop: "64px",
          }}>
          <div class="row">
            <div
              class="column"
              style={{
                paddingLeft: "0px",
                marginRight: "300px",
              }}>
              <ExecCard
                img={andrew_guy}
                name="Andrew Guy"
                position="Find the Good in Humanity"
                description="Andrew is a MACP candidate, he has earned degrees from Southern
                Arkansas University, dual BSc in Medical Biology, Exercise Science, MSc,
                Master of Science in sports medicine (Kinesiology). Andrew is a
                professionally certified educator, Professional Teacher PD facilitator,
                and a former teacher of the year."
              />
            </div>
            <div
              class="column"
              style={{
                paddingLeft: "0px",
                marginRight: "300px",
              }}>
              <ExecCard
                img={anh_le}
                name="Anh Le"
                position="How to Optimize Your Odds for the Best Outcome?"
                description="
                I am currently a data scientist with a keen interest in developing insights.  
                With a background in Biotech, Engineering, and Finance from the University of Waterloo (both a Bachelor and a Master), 
                my insatiable curiosity and a strong desire to make an impact beyond myself have allowed me to step outside my comfort zones.
                "
              />
            </div>
            <div class="column" style={{ paddingLeft: "0px" }}>
              <ExecCard
                img={chris_costa}
                name="Chris Costa"
                position="Choose Love, Not Fear"
                description="The founder of The Costa Group and Change in Motion. Chris has figured out how to turn the most adversity into an engine for positive change. Both for himself and his community. Throughout his life he’s experienced violence, incarceration, and addiction – and perhaps most difficult for him; he made choices which kept him away from his passion as an athlete. Now 20 years later, he’s not only overcome his past but he’s speaking out against domestic violence. He used sport to reconnect with his past, heal it and use that experience to help his local community. He is a competitive middle-distance runner who’s competed internationally for Canada as a master’s athlete and kickboxer."
              />
            </div>
            <div
              class="column"
              style={{
                paddingLeft: "0px",
                paddingTop: "35px",
                marginRight: "300px",
              }}>
              <ExecCard
                img={iman_salehi}
                name="Iman Salehi"
                position="Can We Treat Cancer During a Pregnancy?"
                description="Iman Salehi is a third-year student at the University of Waterloo studying Health Studies with a minor in Medical Physiology. During his co-operative education work terms, Iman’s primary focus has been on breast cancer research, with a deeper focus on the rare occurrence of breast cancer diagnosed during pregnancy. In his most recent co-op at Mount Sinai Hospital, he collaborated with a multidisciplinary care team including physicians and oncology and obstetrical nurses to develop a comprehensive course on the topic of breast cancer diagnosed during pregnancy. In October, Iman and his research team presented their research and course at the Canadian Association of Nurses in Oncology conference and won first place for the Educational category. Today, Iman and his team continue to expand on their breast cancer in pregnancy course, with the objective to add more cancer sites. The application of Iman’s and his team’s research aims to educate oncology and obstetrical health care professionals on the importance of using evidence-based medicine to shape their clinical practice."
              />
            </div>
            <div
              class="column"
              style={{
                paddingLeft: "0px",
                paddingTop: "35px",
                marginRight: "300px",
              }}>
              <ExecCard
                img={karandeep_gill}
                name="Karandeep Gill"
                position="How to Achieve Resilience Through Self-Compassion"
                description="Karandeep Gill is a speech communication and business undergrad student at the University of Waterloo. Last year, she was appointed as Canada’s 2020 Face of Mental Illness. She was granted this extraordinary title for her advocacy for adolescent and South Asian mental health, along with sharing her undefeatable recovery and survival journey while living with a mental illness like Schizoaffective Disorder-Bipolar Type. Her research revolves around how one can overpower traumatic experiences like extreme paranoia, vivid hallucinations, and suicidal ideation through the art of self-compassion. She will explain how being resilient doesn’t stem solely from not giving up, but rather taking care of one's mind, body, and soul during the process."
              />
            </div>
            <div
              class="column"
              style={{ paddingLeft: "0px", paddingTop: "35px" }}>
              <ExecCard
                img={thomas_lenhard}
                name="Thomas Lenhard"
                position="Cry Like A Man: Modeling Positive Masculinity"
                description="Lenny Lenhard is the founder of the Modern Manhood project, which works with Montreal high schoolers to positively reimagine what it means to be a man. Rather than tell boys who they should be, the program helps boys build the self-confidence and emotional literacy to express an authentic version of themselves, free from the constraints that patriarchy imposes upon us all. Operating with a core set of lesson plans, the program - run by men, for men - discusses topics ranging from body image to sex and beyond. As a recent McGill graduate, his insights are informed by his own experiences, as well as his background in sociology - a domain which has challenged him to question how people operate in systems we take for granted."
              />
            </div>
            <div
              class="column"
              style={{
                paddingLeft: "0px",
                paddingTop: "35px",
                marginRight: "300px",
              }}>
              <ExecCard
                img={tanner_philp}
                name="Tanner Philp"
                position="Enter the Metaverse"
                description="Tanner currently works at Kik Interactive, one of Canada’s tech unicorns, which was founded here at the UW Velocity program. For the past year, Tanner has been working with the team at Kik to develop an ecosystem of digital services powered by the cryptocurrency, Kin. His number one priority is finding a way to empower everyone, regardless of demographic, location, or socioeconomic status, to generate and capture value in this age of globalization. In another life, Tanner was a 3-year captain for the Laurier Golden Hawks football team, squaring off in many “Battles of Waterloo.”"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AfterEvent;
