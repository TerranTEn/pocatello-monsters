import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import DonateButton from "./DonateButton";

function Splash() {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid className={classes.root} container item xs={12} spacing={5}>
        <Grid item xs={12}>
          <Typography
            className={classes.header}
            color="textPrimary"
            variant="h1"
          >
            Pocatello Monster's Climbing Gym
          </Typography>
        </Grid>
        <Grid className={classes.smallHeader} item xs={12}>
          <Typography color="textPrimary" variant="h6">
            Be a beast and help build a climbing gym!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DonateButton />
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 1160,
    margin: "auto",
    paddingTop: "10%",
    paddingBottom: "10%",
  },
  header: {
    maxWidth: "100%",
  },
  smallHeader: {
    maxWidth: 480,
  },
});

export default Splash;
