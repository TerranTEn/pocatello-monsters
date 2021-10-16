import { Grid, makeStyles, useTheme } from "@material-ui/core";

import MoshCard from "./MoshCard";
import GravityNiagra from "../images/Gravity-Niagara-1200x675.jpg";
import BoulderWorldCup from "../images/Boulder_Worldcup_2017_Munich_9169.jpg";
import Survey from "./SurveyButton";

const cardInfo = [
  {
    title: "Our Vision",
    description:
      "Rock climbing is exploding in popularity around the world. Our goal is to spread the climbing hype to Pocatello by creating a community powered rock climbing gym by 2023.",
    image: BoulderWorldCup,
    alt: "Gravity Niagra Climbing Gym",
    orientationLeft: false,
    text: "Learn More",
  },
  {
    title: "Current Progress",
    description:
      "This project is in the preliminary stages. We are currently collecting survey results to guage community interest and determine project feasability. You can help us by taking a quick survey.",
    image: GravityNiagra,
    alt: "Gravity Niagra Climbing Gym",
    orientationLeft: true,
    text: "Take the survey",
    id: "news-section",
  },
];

function About() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Grid container item xs={12} id="about-section">
      <Grid className={classes.about} container item xs={12} spacing={8}>
        {cardInfo.map((c, k) => (
          <MoshCard
            key={k}
            title={c.title}
            description={c.description}
            image={c.image}
            alt={c.alt}
            orientationLeft={c.orientationLeft}
            textColor={c.color}
            id={c.id}
          />
        ))}
        <Survey />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  about: {
    maxWidth: 1024,
    margin: "auto",
    paddingTop: "3rem",
  },
}));

export default About;
