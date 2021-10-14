import {
  Toolbar,
  AppBar as MuiAppBar,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core";

import Hamburger from "./Hamburger";
import Menu from "./Menu";
import textImage from "../images/icon.png";
import { useOnClickOutside } from "../hooks";

const links = [
  { text: "Home", to: "/" },
  { text: "About", to: "#about-section" },
  { text: "Campaigns", to: "#about-section" },
  { text: "News", to: "#about-section" },
  { text: "Events", to: "#about-section" },
];
const height = "8vh"; // locate hamburger

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
          <img
            className={`${classes.icon} ${classes.navItem}`}
            src={textImage}
            alt="icon"
          />
          <div className={classes.linkContainer}>
            {links.map((c) => (
              <Link
                className={`${classes.link} ${classes.navItem}`}
                href={c.href}
                to={c.to}
              >
                <Typography variant="h6">{c.text}</Typography>
              </Link>
            ))}
          </div>
          <div ref={node}>
            <Hamburger
              open={open}
              setOpen={setOpen}
              className={`${classes.menuButton} ${classes.navItem}`}
            />
            <Menu open={open} height={height} links={links} setOpen={setOpen} />
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
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  icon: {
    height: "80%",
  },
  toolbar: {
    width: 1160,
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    height: `${height}`,
    minHeight: "64px", // overriding mui's minHeight of 64px
    backgroundColor: (theme) => theme.palette.primary.dark,
  },
  navItem: {
    padding: "0 20px",
  },
  link: {
    textDecoration: "none",
    color: (theme) => theme.palette.textPrimary.light,
    "&:hover": {
      color: (theme) => theme.palette.textPrimary.contrast,
    },
  },
  linkContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  "@media (max-width: 768px)": {
    link: {
      display: "none",
    },
    toolbar: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  "@media (min-width: 769px)": {
    menuButton: {
      display: "none",
    },
  },
}));

export default AppBar;
