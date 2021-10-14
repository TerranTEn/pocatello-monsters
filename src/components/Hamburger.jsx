import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

function Hamburger(props) {
  return (
    <div>
      <IconButton
        aria-label="Open menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => props.setOpen(!props.open)}
        className={props.className}
      >
        <MenuIcon color="secondary" />
      </IconButton>
    </div>
  );
}

export default Hamburger;
