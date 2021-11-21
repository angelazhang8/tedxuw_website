import React from "react";
import { Grid, Image } from "semantic-ui-react";
const facebook = "https://react.semantic-ui.com/images/wireframe/image.png";

class Footer extends Component {
  render() {
    return (
      <Grid
        centered
        columns={3}
        style={{
          color: "white",
        }}>
        <Grid.Column>
          <Image src={facebook} />
        </Grid.Column>
        <Grid.Column>
          <Image src={facebook} />
        </Grid.Column>
        <Grid.Column>
          <Image src={facebook} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Footer;
