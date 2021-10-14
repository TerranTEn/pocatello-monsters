import { Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const classes = useStyles();
  return (
    <Link
      className={classes.root}
      to={props.to}
      href={props.href}
      onClick={() => props.setOpen()}
    >
      <Typography variant="h4" color="Primary">
        {props.text}
      </Typography>
    </Link>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    padding: "0.75rem 2rem",
    textDecoration: "none",
    backgroundColor: "dodgerBlue",
  },
});

export default MenuItem;
