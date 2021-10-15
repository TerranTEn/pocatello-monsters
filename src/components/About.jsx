import { Grid, makeStyles, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import MoshCard from "./MoshCard";
import GravityNiagra from "../images/Gravity-Niagara-1200x675.jpg";
import BoulderWorldCup from "../images/Boulder_Worldcup_2017_Munich_9169.jpg";

const cardInfo = [
  {
    title: "Our Vision",
    description:
      "Rock climbing is exploding in popularity. Our goal is to spread some of the climbing hype to Pocatello by creating a community powered rock climbing gym.",
    image: BoulderWorldCup,
    alt: "Gravity Niagra Climbing Gym",
    orientationLeft: false,
    text: "Learn More",
  },
  {
    title: "Current Progress",
    description:
      "This project is in the preliminary stages. We are currently collecting survey results to guage community interest and determine project feasability. Show your support by taking the survey",
    image: GravityNiagra,
    alt: "Gravity Niagra Climbing Gym",
    orientationLeft: true,
    text: "Take the survey",
  },
];

function About() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Grid container item xs={12} id="about-section">
      <Grid className={classes.about} container item xs={12} spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h2" color="textPrimary">
            About
          </Typography>
        </Grid>
        {cardInfo.map((c) => (
          <MoshCard
            title={c.title}
            description={c.description}
            image={c.image}
            alt={c.alt}
            orientationLeft={c.orientationLeft}
            textColor={c.color}
          />
        ))}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  about: {
    maxWidth: 1024,
    margin: "auto",
  },
}));

export default About;
