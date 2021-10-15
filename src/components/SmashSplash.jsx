import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import Download from "./Download";

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
        spacing={7}
      >
        <div className={classes.background} />
        <Grid item xs={12} m={8}>
          <Typography
            className={classes.header}
            color="textPrimary"
            variant="h1"
          >
            Bringing gym climbing to Pocatello
          </Typography>
        </Grid>
        <Grid className={classes.smallHeader} item xs={12}></Grid>
        <Grid className={classes.smallHeader} item xs={10} m={6}>
          <Typography variant="h4" color="textPrimary">
            GRAVITY is a community-powered startup to promote a healthy
            community and active lifestyle.
          </Typography>
        </Grid>
        <Download prompt="Help make this dream a reality!" />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 1024,
    margin: "auto",
    padding: "13% 0 8% 0",
  },
});

export default Splash;
