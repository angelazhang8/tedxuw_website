import React from "react";
import SpeakerCard from "../../components/SpeakerCard/SpeakerCard";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";
import thomas_lenhard from "../../res/images/speakers/thomas_lenhard.png";
import thomas_lenhard2 from "../../res/images/speakers/ThomasLenhard2.png";
import andrew_guy from "../../res/images/speakers/andrew_guy.png";
import andrew_guy2 from "../../res/images/speakers/Andrew_E_Guy2.png";
import anh_le from "../../res/images/speakers/anh_le.png";
import anh_le2 from "../../res/images/speakers/AnhLe2.png";
import karandeep_gill from "../../res/images/speakers/karandeep_gill.png";
import karandeep_gill2 from "../../res/images/speakers/KarandeepHeadshot.png";
import iman_salehi from "../../res/images/speakers/iman_salehi.png";
import iman_salehi2 from "../../res/images/speakers/ImanSalehi2.png";
import chris_costa from "../../res/images/speakers/chris_costa.png";
import chris_costa2 from "../../res/images/speakers/ChrisCosta2.png";
import tanner_philp from "../../res/images/speakers/tanner_philp.png";
import tanner_philp2 from "../../res/images/speakers/TannerPhilp2.png";
import filler from "../../res/images/speakers/filler.png";

import down from "../../res/images/down.svg";
import { Link } from "react-scroll";
import Header from "../../components/Header/Header";

import {
  StyledRedHeader,
  StyledMainHeader,
  StyledHeaderDescription,
  StyledSmallHeader,
} from "./styles";

const Speakers = () => (
  <section>
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(230, 43, 30, 0.2) 17.25%, rgba(230, 43, 30, 0) 100%)",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0px",
      }}>
      <Header color="#2e0807" height="200" />
      <Container
        text
        style={{
          // transform: "translateY(-50px)",
          marginTop: "70px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          width: "1040px",
          position: "relative",
          textAlign: "center",
          textAlign: "left",
        }}>
        <StyledRedHeader style={{ paddingTop: "64px" }}>
          Coming Soon
        </StyledRedHeader>
        <StyledMainHeader>2021 Speaker Lineup </StyledMainHeader>
        <StyledHeaderDescription>
          In the meantime, checkout our past speakers below!
        </StyledHeaderDescription>
      </Container>

      <Container
        text
        style={{
          // transform: "translateY(-50px)",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          width: "1004px",
          position: "relative",
          textAlign: "center",
          textAlign: "center",
          padding: "0px",
        }}>
        <Link to="speakers" smooth={true} spy={true}>
          <img
            src={down}
            style={{ width: "32px", marginTop: "83px", marginBottom: "40px" }}
          />
        </Link>
      </Container>
    </div>
    <Container
      text
      style={{
        // transform: "translateY(-50px)",
        marginLeft: "auto",
        marginRight: "auto",
        color: "white",
        width: "1004px",
        position: "relative",
        textAlign: "center",
        textAlign: "center",
        padding: "0px",
      }}>
      <p class="speakers">
        <StyledSmallHeader>2021 Speakers</StyledSmallHeader>
      </p>
      <SpeakerCard
        img={andrew_guy2}
        name="Andrew Guy"
        talk_name="Find the Good in Humanity"
        description="Andrew is a MACP candidate, he has earned degrees from Southern
        Arkansas University, dual BSc in Medical Biology, Exercise Science, MSc,
        Master of Science in sports medicine (Kinesiology). Andrew is a
        professionally certified educator, Professional Teacher PD facilitator,
        and a former teacher of the year."
      />
      <SpeakerCard
        img={anh_le2}
        name="Anh Le"
        talk_name="How to Optimize Your Odds for the Best Outcome?"
        description="As an Asian female immigrant/ international student, I want to break out of the stereotypes and believe in myself to make a difference in the world. And to make a difference, I want to understand how the world works through the lens of research, insights, and data. Having had a natural talent for science and arts since I was little, I joined science competitions to hackathons from school to university.
        
        I am currently a data scientist with a keen interest in developing insights. I love learning about how the world works. I believe a great data scientist must have the speech of a diplomat, the curiosity of a scientist, and a business mindset of an entrepreneur.
         
        With a background in Biotech, Engineering, and Finance from the University of Waterloo (both a Bachelor and a Master), my insatiable curiosity and a strong desire to make an impact beyond myself have allowed me to step outside my comfort zones.
         
        Outside of work, you can find me playing Pokemon Go and chess, helping out with International Blockchain Olympiad and DarkByte Research, meditation, connecting with people, and biking.
         
        Past events I spoke at TEDxUW 2018, Hackthe6ix 2020, Manning Publications – Data Science, Women in Data, CAASA Master of Quantitive Finance, and DataScienceGo.
         
        To scale an idea, you need optimized execution and good decision-making. My blog on finance, data science, and blockchain on Medium @thisisanhle (also on other socials) has over 10,000 views a month. Follow me on Medium for my insights.
        "
      />
      <SpeakerCard
        img={iman_salehi2}
        name="Iman Salehi"
        talk_name="Can We Treat Cancer During a Pregnancy?"
        description="Iman Salehi is a third-year student at the University of Waterloo studying Health Studies with a minor in Medical Physiology. During his co-operative education work terms, Iman’s primary focus has been on breast cancer research, with a deeper focus on the rare occurrence of breast cancer diagnosed during pregnancy. In his most recent co-op at Mount Sinai Hospital, he collaborated with a multidisciplinary care team including physicians and oncology and obstetrical nurses to develop a comprehensive course on the topic of breast cancer diagnosed during pregnancy. In October, Iman and his research team presented their research and course at the Canadian Association of Nurses in Oncology conference and won first place for the Educational category. Today, Iman and his team continue to expand on their breast cancer in pregnancy course, with the objective to add more cancer sites. The application of Iman’s and his team’s research aims to educate oncology and obstetrical health care professionals on the importance of using evidence-based medicine to shape their clinical practice."
      />
      <SpeakerCard
        img={karandeep_gill2}
        name="Karandeep Gill"
        talk_name="How to Achieve Resilience Through Self-Compassion"
        description="Karandeep Gill is a speech communication and business undergrad student at the University of Waterloo. Last year, she was appointed as Canada’s 2020 Face of Mental Illness. She was granted this extraordinary title for her advocacy for adolescent and South Asian mental health, along with sharing her undefeatable recovery and survival journey while living with a mental illness like Schizoaffective Disorder-Bipolar Type. Her research revolves around how one can overpower traumatic experiences like extreme paranoia, vivid hallucinations, and suicidal ideation through the art of self-compassion. She will explain how being resilient doesn’t stem solely from not giving up, but rather taking care of one's mind, body, and soul during the process."
      />
      <SpeakerCard
        img={thomas_lenhard2}
        name="Thomas Lenhard"
        talk_name="Cry Like A Man: Modeling Positive Masculinity"
        description="Lenny Lenhard is the founder of the Modern Manhood project, which works with Montreal high schoolers to positively reimagine what it means to be a man. Rather than tell boys who they should be, the program helps boys build the self-confidence and emotional literacy to express an authentic version of themselves, free from the constraints that patriarchy imposes upon us all. Operating with a core set of lesson plans, the program - run by men, for men - discusses topics ranging from body image to sex and beyond. As a recent McGill graduate, his insights are informed by his own experiences, as well as his background in sociology - a domain which has challenged him to question how people operate in systems we take for granted."
      />
      <SpeakerCard
        img={chris_costa2}
        name="Chris Costa"
        talk_name="Choose Love, Not Fear"
        description="The founder of The Costa Group and Change in Motion. Chris has figured out how to turn the most adversity into an engine for positive change. Both for himself and his community. Throughout his life he’s experienced violence, incarceration, and addiction – and perhaps most difficult for him; he made choices which kept him away from his passion as an athlete. Now 20 years later, he’s not only overcome his past but he’s speaking out against domestic violence. He used sport to reconnect with his past, heal it and use that experience to help his local community. He is a competitive middle-distance runner who’s competed internationally for Canada as a master’s athlete and kickboxer."
      />
      <SpeakerCard
        img={tanner_philp2}
        name="Tanner Philp"
        talk_name="Enter the Metaverse"
        description="Tanner currently works at Kik Interactive, one of Canada’s tech unicorns, which was founded here at the UW Velocity program. For the past year, Tanner has been working with the team at Kik to develop an ecosystem of digital services powered by the cryptocurrency, Kin. His number one priority is finding a way to empower everyone, regardless of demographic, location, or socioeconomic status, to generate and capture value in this age of globalization. In another life, Tanner was a 3-year captain for the Laurier Golden Hawks football team, squaring off in many “Battles of Waterloo.”"
      />
    </Container>
    <Divider style={{ height: "100px" }} />
  </section>
);

export default Speakers;
