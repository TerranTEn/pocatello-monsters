import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import BgImage from "../images/WestFork.jpg";
import PRCtext from "../images/PRCtext-white.png";

function Splash() {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      className={classes.root}
      direction="column"
      alignItems="center"
    >
      <Grid item alignContent="center">
        <img
          src={PRCtext}
          className={classes.headerImage}
          alt="Portneuf Resource Council"
        />
      </Grid>
      <Grid item>
        <Typography
          className={classes.smallHeader}
          color="primary"
          variant="h5"
        >
          People organizing for a prosperous and healthy Southern Idaho since
          1978
        </Typography>
      </Grid>

      <div className={classes.background}></div>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    textAlign: "center",
    backgroundColor: "black",
    zIndex: -2,
  },

  headerImage: {
    maxHeight: "25vh",
    padding: "32vh 0px 7vh 0px",
  },
  smallHeader: {
    maxWidth: 480,
    color: "white",
  },
  background: {
    backgroundImage: `url(${BgImage})`,
    opacity: 0.6,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  "@media (min-width: 769px)": {
    background: {
      backgroundAttachment: "fixed",
    },
  },
  "@media (max-width: 768px)": {
    background: {
      backgroundAttachment: "scroll",
    },
  },
});

export default Splash;
