import Grid from "@material-ui/core/Grid";

import Splash from "./Splash";
import About from "./About";
import MailchimpSub from "./MailChimpSub";

function Home() {
  return (
    <Grid item container>
      <Splash />
      <About />
      <MailchimpSub />
    </Grid>
  );
}

export default Home;
