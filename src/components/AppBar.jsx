import {
  Toolbar,
  AppBar as MuiAppBar,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useRef, useState } from "react";
import { useTheme } from "@material-ui/core";

import Hamburger from "./Hamburger";
import Menu from "./Menu";
import icon from "../images/iconR2.png";
import { useOnClickOutside } from "../hooks";

const links = [
  { text: "Home", href: "#home-section" },
  { text: "About", href: "#about-section" },
  {
    text: "Survey",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfSK1K5UO0FYEjLYdpVHxIZhsXuamSuTi__YT1B2jwnQXm2Pw/viewform?usp=sf_link",
  },
  { text: "News", href: "#news-section" },
  { text: "Contact", href: "mailto:terran.engle@gmail.com" },
  { text: "Subscribe", href: "#subscribe-section" },
];
const height = "96px"; // locate hamburger

function AppBar() {
  const theme = useTheme();
  const classes = useStyles(theme, height);
  const node = useRef();
  const [open, setOpen] = useState(false);
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Grid className={classes.root} item xs={12}>
      <MuiAppBar position="static">
        <Toolbar className={classes.toolbar} disableGutters>
          <div className={classes.content}>
            <div className={classes.leftStuff}>
              <img
                className={`${classes.icon} ${classes.image}`}
                src={icon}
                alt="icon"
              />
              <Typography variant="h4" component="h1">
                GRAVITY
              </Typography>
              <Typography
                variant="h6"
                component="h1"
                className={`${classes.navItem} ${classes.subHeader}`}
              >
                Indoor Gym Climbing
              </Typography>
            </div>
            <div className={classes.rightStuff}>
              {links.map((l, k) => (
                <a
                  key={k}
                  className={`${classes.link} ${classes.navItem}`}
                  href={l.href}
                >
                  <Typography variant="body1">{l.text}</Typography>
                </a>
              ))}
              <div ref={node}>
                <Hamburger
                  open={open}
                  setOpen={setOpen}
                  className={`${classes.menuButton} ${classes.image}`}
                />
                <Menu
                  open={open}
                  height={height}
                  links={links}
                  setOpen={setOpen}
                />
              </div>
            </div>
          </div>
        </Toolbar>
      </MuiAppBar>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
  },
  toolbar: {
    display: "flex",
    height: `${height}`,
    minHeight: "96px", // overriding mui's minHeight of 64px
    backgroundColor: (theme) => theme.palette.primary.dark,
  },
  content: {
    width: 1160,
    height: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    padding: "10 5",
  },
  leftStuff: {
    display: "flex",
    alignItems: "center",
  },
  rightStuff: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "10%",
  },
  icon: {
    height: "82%",
  },
  navItem: {
    padding: "0 15px",
  },
  image: {
    padding: "0 15px",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    color: (theme) => theme.palette.textPrimary.light,
    "&:hover": {
      color: (theme) => theme.palette.textPrimary.contrast,
    },
  },
  "@media (max-width: 1160px)": {
    content: {
      width: "100%",
    },
  },
  "@media (max-width: 810px)": {
    link: {
      display: "none",
    },
    navItem: {
      display: "none",
    },
    content: {
      width: "100%",
    },
    leftStuff: {
      width: "80%",
    },
  },
  "@media (min-width: 811px)": {
    menuButton: {
      display: "none",
    },
  },
  "@media (max-width: 985px)": {
    subHeader: {
      display: "none",
    },
  },
}));

export default AppBar;
