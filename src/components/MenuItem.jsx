import { Typography, makeStyles, useTheme } from "@material-ui/core";

function MenuItem(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <a
      className={classes.root}
      href={props.href}
      onClick={() => props.setOpen()}
    >
      <Typography variant="h4" color="primary">
        {props.text}
      </Typography>
    </a>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    padding: "0.75rem 2rem",
    textDecoration: "none",
    backgroundColor: "dodgerBlue",
    borderBottom: "solid #212121 2px",
  },
}));
export default MenuItem;
