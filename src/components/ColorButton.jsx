import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

function ColorButton({ buttonText, href, alt }) {
  const classes = useStyles();
  return (
    <a className={classes.root} href={href} alt={alt}>
      <Typography className={classes.text} variant="h6" color="primary">
        {buttonText}
      </Typography>
    </a>
  );
}

const useStyles = makeStyles({
  root: {
    display: "inline-block",
    padding: "0 0.5rem",
    textDecoration: "none",
    backgroundColor: "#39B54A",
    borderRadius: "2em",
    "&:hover": {
      backgroundColor: "#8DC63F",
    },
  },
  text: {
    padding: "0.5rem",
  },
});

export default ColorButton;
