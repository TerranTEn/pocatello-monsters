import { Grid, makeStyles, useTheme } from "@material-ui/core";

import MoshCard from "./MoshCard";
import IconR1 from "../images/iconR1.png";
import BoulderWorldCup from "../images/Boulder_Worldcup_2017_Munich_9169.jpg";

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
      "We're getting this project kicked off by determining the community's interest in building an awesome new climbing gym. Help us out by taking a quick survey, subscribing to our newsletter, and sharing this page on social media!",
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
    <Grid id="about-section" container item xs={12}>
      <Grid
        item
        container
        className={classes.about}
        direction="column"
        spacing={6}
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
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  about: {
    maxWidth: 1024,
    margin: "auto",
    padding: "5% 0 5% 0",
  },
}));

export default About;
