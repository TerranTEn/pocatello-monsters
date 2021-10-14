import { Typography, Grid, makeStyles, Button } from "@material-ui/core";

function MoshCard({ orientationLeft, title, description, image, alt }) {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      spacing={3}
      xs={12}
      direction={orientationLeft ? "row" : "row-reverse"}
    >
      <Grid item xs={12} sm={6}>
        <Typography
          className={classes.title}
          variant="h4"
          component="h3"
          color="textPrimary"
        >
          {title}
        </Typography>
        <Typography className={classes.body} variant="body1">
          {description}
        </Typography>
        <Button variant="outlined" color="secondary" className={classes.button}>
          Learn more
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img className={classes.image} src={image} alt={alt} />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  image: {
    width: "100%",
  },
  title: {
    margin: "1rem 0",
  },
  body: {
    marginBottom: "1.5rem",
  },
  button: {
    zIndex: -1,
  },
});

export default MoshCard;
