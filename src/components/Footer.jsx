import { makeStyles, Button, Grid } from "@material-ui/core";

function Footer(props) {
  const classes = useStyles(props);
  return (
    <Grid container item xs={12}>
      <Grid item xs={12} className={classes.root}>
        <Button>Copyright</Button>
        <Button>Privacy</Button>
        <Button href="mailto:terran.engle@gmail.com">Contact</Button>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: "auto",
    borderTop: "1px solid black",
  },
});

export default Footer;
