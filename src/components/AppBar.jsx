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
  { text: "Survey", href: "https://www.surveymonkey.com/r/TJP3SK8" },
  { text: "News", href: "#news-section" },
  { text: "Contact", href: "mailto:terran.engle@gmail.com" },
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
                className={`${classes.icon} ${classes.navItem}`}
                src={icon}
                alt="icon"
              />
              <Typography variant="h4" component="h1">
                GRAVITY
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className={`${classes.link} ${classes.navItem}`}
              >
                Indoor gym climbing
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
                  className={`${classes.menuButton} ${classes.navItem}`}
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
    width: "50%",
  },
  rightStuff: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    height: "90%",
  },
  navItem: {
    padding: "0 15px",
  },
  link: {
    textDecoration: "none",
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
  "@media (max-width: 800px)": {
    link: {
      display: "none",
    },
    content: {
      width: "100%",
    },
    leftStuff: {
      width: "80%",
    },
  },
  "@media (min-width: 800px)": {
    menuButton: {
      display: "none",
    },
  },
}));

export default AppBar;
