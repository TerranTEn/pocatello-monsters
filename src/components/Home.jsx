import Grid from "@material-ui/core/Grid";

import Splash from "./Splash";
import About from "./About";

function Home() {
  return (
    <Grid item container>
      <Splash />
      <About />
    </Grid>
  );
}

export default Home;
