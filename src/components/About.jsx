import { Grid, makeStyles, useTheme } from "@material-ui/core";

import MoshCard from "./MoshCard";
import IconR1 from "../images/iconR1.png";
import BoulderWorldCup from "../images/Boulder_Worldcup_2017_Munich_9169.jpg";
import Survey from "./SurveyButton";

const cardInfo = [
  {
    title: "Our Vision",
    description:
      "Climbing is exploding in popularity around the world. Our goal is to build a modern climbing facility that meets the needs of our entire community by 2023. Pocatello is ready to send!",
    image: BoulderWorldCup,
    alt: "Bouldering world cup, Munich, 2017",
    orientationLeft: false,
  },
  {
    title: "Current Progress",
    description:
      "We're just getting started by collecting survey results to determine the factors for success and project feasability. Help us out by taking a quick survey and sharing this page on social media.",
    image: IconR1,
    alt: "Gravity Pocatello Logo",
    orientationLeft: true,
    id: "news-section",
  },
];

function About() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Grid
      id="about-section"
      className={classes.about}
      container
      item
      xs={12}
      spacing={8}
    >
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
