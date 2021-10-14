import { Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Download(props) {
  const classes = useStyles();

  const redirect = (targetUrl) => {
    window.location.href = targetUrl;
  };

  return (
    <Grid item xs={12}>
      <Typography color="textPrimary" variant="subtitle1">
        {props.prompt}
      </Typography>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          onClick={() => redirect("https://www.apple.com/app-store/")}
          variant="outlined"
        >
          App Store
        </Button>
        <Button
          onClick={() => redirect("https://play.google.com/store")}
          variant="outlined"
        >
          Play Store
        </Button>
      </div>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export default Download;
