import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

function AboutCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={props.image} className={classes.image} alt={props.alt} />
      <Typography variant="h3" color="textPrimary">
        {props.text}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles({
  root: { display: "flex" }, //, height: "25%", width: "40%", padding: "3em" },
  image: {
    width: "50%",
    borderRadius: "2em",
    boxShadow: "-0.5rem 0.5rem #3f51b5",
  },
});

export default AboutCard;
