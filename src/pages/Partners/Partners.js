import React from "react";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";
import {
  StyledRedHeader,
  StyledMainHeader,
  StyledHeaderDescription,
} from "./styles";
import down from "../../res/images/down.svg";
import university_of_waterloo from "../../res/images/sponsors/university_of_waterloo.svg";
import basecamp from "../../res/images/sponsors/basecamp.svg";
import city_of_waterloo from "../../res/images/sponsors/city_of_waterloo.svg";
import mailchimp from "../../res/images/sponsors/mailchimp.svg";
import waterloo_arts_endowment_fund from "../../res/images/sponsors/waterloo_arts_endowment_fund.svg";
import wusa from "../../res/images/sponsors/wusa.svg";

import { Link } from "react-scroll";
import Header from "../../components/Header/Header";

const Partners = () => (
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
        <StyledMainHeader>2021 Partners </StyledMainHeader>
        <StyledHeaderDescription>
          In the meantime, thank you to our 2020 partners for their support!
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
        <Link to="partners" smooth={true} spy={true}>
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
        marginTop: "50px",
        marginBottom: "160px",
        marginLeft: "auto",
        marginRight: "auto",
        color: "white",
        width: "1004px",
        position: "relative",
        textAlign: "center",
        textAlign: "center",
        padding: "0px",
      }}>
      <div class="partners">
        <div class="ui grid" style={{ transform: "translateX(-10px" }}>
          <div class="row" style={{ columnGap: "80px", alignItems: "center" }}>
            <div class="four wide column">
              <img src={university_of_waterloo} style={{ width: "235px" }} />
            </div>
            <div class="four wide column">
              <img src={wusa} style={{ width: "235px" }} />
            </div>
            <div class="four wide column">
              <img
                src={waterloo_arts_endowment_fund}
                style={{ width: "235px" }}
              />
            </div>
          </div>
          <div class="row" style={{ columnGap: "80px", alignItems: "center" }}>
            <div class="four wide column">
              <img src={basecamp} style={{ width: "235px" }} />
            </div>
            <div class="four wide column">
              <img src={city_of_waterloo} style={{ width: "235px" }} />
            </div>
            <div class="four wide column">
              <img src={mailchimp} style={{ width: "235px" }} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Partners;
