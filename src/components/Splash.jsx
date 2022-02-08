import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import ColorButton from "./ColorButton";

function Splash() {
  const classes = useStyles();
  return (
    <Grid container item xs={12} id="home-section">
      <Grid
        className={classes.root}
        container
        direction="column"
        item
        xs={12}
        spacing={6}
      >
        <Grid item xs={12} className={classes.header}>
          <Typography color="textPrimary" variant="h1">
            Bringing gym climbing to Pocatello.
          </Typography>
        </Grid>
        <Grid item xs={10} lg={8}>
          <Typography variant="h4" color="textPrimary">
            Help make the dream a reality by taking a quick survey:
          </Typography>
        </Grid>
        <Grid item>
          <ColorButton
            buttonText="Click here to take the survey"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSK1K5UO0FYEjLYdpVHxIZhsXuamSuTi__YT1B2jwnQXm2Pw/viewform?usp=sf_link"
            alt="Click here to take the survey"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
const useStyles = makeStyles({
  root: {
    maxWidth: 1024,
    margin: "auto",
    padding: "13% 0 5% 0",
  },
  header: {
    marginBottom: "69px",
  },
  "@media (max-width: 800px)": {
    root: {
      padding: "25% 0 5% 0",
    },
  },
});

export default Splash;
