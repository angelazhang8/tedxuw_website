import React from "react";
import SpeakerCard from "../../components/SpeakerCard/SpeakerCard";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";
import speaker_john from "../../res/images/speaker_john.png";
import down from "../../res/images/down.svg";
import { Link } from "react-scroll";

import {
  StyledRedHeader,
  StyledMainHeader,
  StyledHeaderDescription,
  StyledSmallHeader,
} from "./styles";

const Speakers = () => (
  <section>
    {/* <div
      style={{
        backgroundImage: "linear-gradient(#FF1A0A, black)",
        opacitiy: "0.6",
        width: "1440px",
      }}> */}
    <Container
      text
      style={{
        // transform: "translateY(-50px)",
        marginTop: "121px",
        marginLeft: "auto",
        marginRight: "auto",
        color: "white",
        width: "1040px",
        position: "relative",
        textAlign: "center",
        textAlign: "left",
      }}>
      <StyledRedHeader>Coming Soon</StyledRedHeader>
      <StyledMainHeader>2021 Speaker Lineup </StyledMainHeader>
      <StyledHeaderDescription>
        In the meantime, checkout our past speakers below!
      </StyledHeaderDescription>
    </Container>
    {/* </div> */}

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
        img={speaker_john}
        name="John Tukums"
        talk_name="Breath 2.0: Upgrading Your Breathing Operating System"
        description="John Tukums is the founder and CEO of DeepSubconscious.ai Inc. and the author of the book Sustaining Happiness. He followed his father and grandfather into health care, and through his initiatives, John works with clients to help them take action and seize the day. As the host of Happiness 2.02 Podcast, John interviews world-renowned executives and remarkable leaders so that listeners can apply their wisdom. Through his work and podcast, John focuses on stripping away the fear-inducing language related to breathing and helping clients experience an integrated approach to health, wellness and well-being.  John is a Fellow Founder of the inaugural World Happiness Summit in Miami. John was invited  to be a participant of Global Dialogue for Happiness and World Government Summit in Dubai and was a speaker at the 2019 Transformative Technology Conference, which is dedicated to unlocking the future of health, work, and human excellence through transformative technology."
      />
      <SpeakerCard
        img={speaker_john}
        name="John Tukums"
        talk_name="Breath 2.0: Upgrading Your Breathing Operating System"
        description="John Tukums is the founder and CEO of DeepSubconscious.ai Inc. and the author of the book Sustaining Happiness. He followed his father and grandfather into health care, and through his initiatives, John works with clients to help them take action and seize the day. As the host of Happiness 2.02 Podcast, John interviews world-renowned executives and remarkable leaders so that listeners can apply their wisdom. Through his work and podcast, John focuses on stripping away the fear-inducing language related to breathing and helping clients experience an integrated approach to health, wellness and well-being.  John is a Fellow Founder of the inaugural World Happiness Summit in Miami. John was invited  to be a participant of Global Dialogue for Happiness and World Government Summit in Dubai and was a speaker at the 2019 Transformative Technology Conference, which is dedicated to unlocking the future of health, work, and human excellence through transformative technology."
      />
      <SpeakerCard
        img={speaker_john}
        name="John Tukums"
        talk_name="Breath 2.0: Upgrading Your Breathing Operating System"
        description="John Tukums is the founder and CEO of DeepSubconscious.ai Inc. and the author of the book Sustaining Happiness. He followed his father and grandfather into health care, and through his initiatives, John works with clients to help them take action and seize the day. As the host of Happiness 2.02 Podcast, John interviews world-renowned executives and remarkable leaders so that listeners can apply their wisdom. Through his work and podcast, John focuses on stripping away the fear-inducing language related to breathing and helping clients experience an integrated approach to health, wellness and well-being.  John is a Fellow Founder of the inaugural World Happiness Summit in Miami. John was invited  to be a participant of Global Dialogue for Happiness and World Government Summit in Dubai and was a speaker at the 2019 Transformative Technology Conference, which is dedicated to unlocking the future of health, work, and human excellence through transformative technology."
      />
      <SpeakerCard
        img={speaker_john}
        name="John Tukums"
        talk_name="Breath 2.0: Upgrading Your Breathing Operating System"
        description="John Tukums is the founder and CEO of DeepSubconscious.ai Inc. and the author of the book Sustaining Happiness. He followed his father and grandfather into health care, and through his initiatives, John works with clients to help them take action and seize the day. As the host of Happiness 2.02 Podcast, John interviews world-renowned executives and remarkable leaders so that listeners can apply their wisdom. Through his work and podcast, John focuses on stripping away the fear-inducing language related to breathing and helping clients experience an integrated approach to health, wellness and well-being.  John is a Fellow Founder of the inaugural World Happiness Summit in Miami. John was invited  to be a participant of Global Dialogue for Happiness and World Government Summit in Dubai and was a speaker at the 2019 Transformative Technology Conference, which is dedicated to unlocking the future of health, work, and human excellence through transformative technology."
      />
      <SpeakerCard
        img={speaker_john}
        name="John Tukums"
        talk_name="Breath 2.0: Upgrading Your Breathing Operating System"
        description="John Tukums is the founder and CEO of DeepSubconscious.ai Inc. and the author of the book Sustaining Happiness. He followed his father and grandfather into health care, and through his initiatives, John works with clients to help them take action and seize the day. As the host of Happiness 2.02 Podcast, John interviews world-renowned executives and remarkable leaders so that listeners can apply their wisdom. Through his work and podcast, John focuses on stripping away the fear-inducing language related to breathing and helping clients experience an integrated approach to health, wellness and well-being.  John is a Fellow Founder of the inaugural World Happiness Summit in Miami. John was invited  to be a participant of Global Dialogue for Happiness and World Government Summit in Dubai and was a speaker at the 2019 Transformative Technology Conference, which is dedicated to unlocking the future of health, work, and human excellence through transformative technology."
      />
      <SpeakerCard
        img={speaker_john}
        name="John Tukums"
        talk_name="Breath 2.0: Upgrading Your Breathing Operating System"
        description="John Tukums is the founder and CEO of DeepSubconscious.ai Inc. and the author of the book Sustaining Happiness. He followed his father and grandfather into health care, and through his initiatives, John works with clients to help them take action and seize the day. As the host of Happiness 2.02 Podcast, John interviews world-renowned executives and remarkable leaders so that listeners can apply their wisdom. Through his work and podcast, John focuses on stripping away the fear-inducing language related to breathing and helping clients experience an integrated approach to health, wellness and well-being.  John is a Fellow Founder of the inaugural World Happiness Summit in Miami. John was invited  to be a participant of Global Dialogue for Happiness and World Government Summit in Dubai and was a speaker at the 2019 Transformative Technology Conference, which is dedicated to unlocking the future of health, work, and human excellence through transformative technology."
      />
    </Container>
    <Divider style={{ height: "100px" }} />
  </section>
);

export default Speakers;
