import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import DonateButton from "./DonateButton";

function Splash() {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid
        className={classes.root}
        container
        direction="column"
        item
        xs={12}
        spacing="5"
      >
        <Grid item xs={12}>
          <Typography
            className={classes.header}
            color="textPrimary"
            variant="h2"
          >
            Let's bring climbing to Pocatello!
          </Typography>
        </Grid>
        <Grid className={classes.smallHeader} item xs={12}></Grid>
        <Grid className={classes.smallHeader} item xs={12}>
          <a color="textPrimary" href alt>
            Pocatello Monsters' Gym is a startup to promote a healthy community
            by opening a climbing facility. You can help us get off the ground
            by taking the survey:
          </a>
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
    maxWidth: 1024,
    margin: "auto",
    padding: "11% 0",
  },
  header: {
    maxWidth: 550,
  },
  smallHeader: {
    maxWidth: 500,
  },
});

export default Splash;
