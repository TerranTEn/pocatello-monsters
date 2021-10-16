import { Typography, Grid, makeStyles } from "@material-ui/core";

function MoshCard({
  orientationLeft,
  title,
  description,
  image,
  alt,

  id,
}) {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      spacing={3}
      xs={12}
      direction={orientationLeft ? "row" : "row-reverse"}
    >
      <Grid item xs={12} sm={6} id={id}>
        <Typography
          className={classes.title}
          variant="h2"
          component="h3"
          color="textPrimary"
        >
          {title}
        </Typography>
        <Typography className={classes.body} variant="h5">
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
  image: {
    width: "100%",
    height: "16rem",
    borderRadius: "20px",
    objectFit: "cover",
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
