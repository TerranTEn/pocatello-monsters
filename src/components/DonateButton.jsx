import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

function Button({ buttonText }) {
  const classes = useStyles();

  return (
    <Link className={classes.root} to="donate" alt="Donate">
      <Typography className={classes.text} variant="h6">
        {buttonText}
      </Typography>
    </Link>
  );
}

const useStyles = makeStyles({
  root: {
    display: "inline-block",
    justifyContent: "Center",
    padding: "0 0.5rem",
    textDecoration: "none",
    backgroundColor: "dodgerblue",
    borderRadius: "2em",
    "&:hover": {
      backgroundColor: "lightskyblue",
    },
  },
  text: {
    padding: "0.5rem",
    color: "black",
  },
});

export default Button;
