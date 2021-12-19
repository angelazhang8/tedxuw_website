import React from "react";
import meet_the_team from "../../res/images/meet_the_team.png";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";
import { StyledTitle, StyledDescription, StyledHeader } from "./styles";
import Header from "../../components/Header/Header";
import FounderCard from "../../components/FounderCard/FounderCard";
import ExecCard from "../../components/ExecCard/ExecCard";
import team_matthew from "../../res/images/team_matthew.png";

const About = () => (
  <section>
    <Container
      text
      style={{
        // transform: "translateY(-50px)",
        marginLeft: "auto",
        marginRight: "auto",
        color: "white",
        width: "1440px",
        position: "relative",
        textAlign: "center",
      }}>
      <div
        style={{
          width: "1440px",
          height: "900px",
          backgroundImage: `url(${meet_the_team})`,
        }}>
        <Container
          text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
            width: "1440px",
            position: "relative",
            textAlign: "center",
          }}>
          <StyledTitle>Meet the Team</StyledTitle>
          <StyledDescription>
            A group of curious students inspired by creativity.
          </StyledDescription>
        </Container>
      </div>
    </Container>
    <Container
      style={{
        marginTop: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        color: "white",
        width: "1004px",
        position: "relative",
        textAlign: "center",
      }}>
      <StyledHeader>Founders</StyledHeader>
      <FounderCard
        img={team_matthew}
        name="Matthew Zhu"
        position="Co-Chair"
        description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
        linkedin="https://www.linkedin.com/notifications/"
      />
      <FounderCard
        img={team_matthew}
        name="Matthew Zhu"
        position="Co-Chair"
        description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
        linkedin="https://www.linkedin.com/notifications/"
      />
      <StyledHeader>Marketing</StyledHeader>
      <div class="ui grid">
        <div class="column" style={{ width: "350px" }}>
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
        </div>
        <div class="column" style={{ width: "350px" }}>
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
        </div>
        <div class="column" s>
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
        </div>
      </div>
      <StyledHeader>Participant Experience</StyledHeader>
      <div class="ui grid">
        <div class="column" style={{ width: "350px" }}>
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
        </div>
        <div class="column" style={{ width: "350px" }}>
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
        </div>
        <div class="column">
          <ExecCard
            img={team_matthew}
            name="Matthew Zhu"
            position="Co-Chair"
            description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
            linkedin="https://www.linkedin.com/notifications/"
          />
        </div>
      </div>
    </Container>
  </section>
);

export default About;
