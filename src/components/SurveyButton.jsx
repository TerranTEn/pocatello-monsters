import { Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function SurveyButton(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Typography color="textPrimary" variant="subtitle1">
        {props.prompt}
      </Typography>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          href={"https://www.surveymonkey.com/r/TJP3SK8"}
          variant="outlined"
        >
          Click here to take the survey
        </Button>
      </div>
    </Grid>
  );
}
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
}));

export default SurveyButton;
