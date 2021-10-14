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

import DonateButton from "./DonateButton";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import textImage from "../images/icon.png";
import { useOnClickOutside } from "../hooks";

const height = "8vh";

const links = [
  { text: "Home", to: "/" },
  { text: "About", to: "#about-section" },
  { text: "Campaigns", to: "#about-section" },
  { text: "News", to: "#about-section" },
  { text: "Events", to: "#about-section" },
];

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
          {links.map((c) => (
            <Link
              className={`${classes.link} ${classes.navItem}`}
              href={c.href}
              to={c.to}
            >
              <Typography variant="h6">{c.text}</Typography>
            </Link>
          ))}
          <div ref={node}>
            <Hamburger
              open={open}
              setOpen={setOpen}
              className={`${classes.menuButton} ${classes.navItem}`}
            />
            <Menu open={open} height={height} links={links} setOpen={setOpen} />
          </div>
          <div className={classes.navItem}>
            <DonateButton />
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
  },
  icon: {
    height: "80%",
  },
  toolbar: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  "@media (max-width: 768px)": {
    link: {
      display: "none",
    },
    toolbar: {
      justifyContent: "space-evenly",
    },
  },
  "@media (min-width: 769px)": {
    menuButton: {
      display: "none",
    },
  },
}));

export default AppBar;
