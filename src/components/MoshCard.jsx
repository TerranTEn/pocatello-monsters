import { Typography, Grid, makeStyles } from "@material-ui/core";

function MoshCard({ orientationLeft, title, description, image, alt, id }) {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      spacing={3}
      xs={12}
      direction={orientationLeft ? "row" : "row-reverse"}
      className={classes.root}
    >
      <Grid item xs={12} sm={6}>
        <div className={classes.appBarSpacer} id={id} />
        <Typography className={classes.title} variant="h2" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="h5" component="p">
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img className={classes.image} src={image} alt={alt} />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    margin: "auto",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "18rem",
    borderRadius: "20px",
    objectFit: "cover",
  },
  title: {
    margin: ".25rem 0",
  },
  appBarSpacer: {
    position: "absolute",
    height: "96px",
    top: "-96px",
  },
});

export default MoshCard;
