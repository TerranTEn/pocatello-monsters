import { Typography, makeStyles } from "@material-ui/core";

function Donate() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Donate stuff goes here</Typography>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "80vh",
    paddingTop: "15vh",
    textAlign: "center",
  },
});

export default Donate;
