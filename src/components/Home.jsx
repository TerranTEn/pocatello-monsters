import Grid from "@material-ui/core/Grid";

import SmashSplash from "./SmashSplash";
import About from "./About";

function Home() {
  return (
    <Grid item container>
      <SmashSplash />
      <About />
    </Grid>
  );
}

export default Home;
