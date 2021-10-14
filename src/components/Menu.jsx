import { makeStyles } from "@material-ui/core";

import MenuItem from "./MenuItem";

function Menu(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.Menu}>
      {props.links.map((c) => (
        <MenuItem
          text={c.text}
          to={c.to}
          href={c.href}
          setOpen={props.setOpen}
        />
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  Menu: {
    height: "fit-content",
    position: "fixed",
    top: (props) => props.height, // Height of AppBar
    left: "0px",
    bottom: "0px",
    right: "0px",
    display: (props) => (props.open ? "" : "none"),
  },
});

export default Menu;
