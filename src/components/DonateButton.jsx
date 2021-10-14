import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

function Donate() {
  const classes = useStyles();

  return (
    <Link className={classes.root} to="donate" alt="Donate">
      <Typography className={classes.text} variant="h6">
        Donate
      </Typography>
    </Link>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignContent: "Center",
    padding: "0px 0.5rem",
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

export default Donate;
