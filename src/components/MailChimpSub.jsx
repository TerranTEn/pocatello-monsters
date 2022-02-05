import MailchimpSubscribe from "react-mailchimp-subscribe";
import {
  Button,
  makeStyles,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import { useState, useEffect } from "react";

function CustomForm(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // email &&
    //   firstName &&
    //   lastName &&
    //   email.indexOf("@") > -1 &&
    props.subscribe({
      MERGE0: email,
      MERGE1: firstName,
      MERGE2: lastName,
    });
  }

  useEffect(() => {
    if (props.status === "success") clearFields();
  }, [props.status]);

  const clearFields = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  return (
    <Grid
      item
      container
      xs={12}
      className={classes.root}
      id="subscribe-section"
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
        className={classes.formContainer}
      >
        <Typography variant="h4" className={classes.inputFieldItem}>
          {props.status === "success"
            ? "<3 Success! We'll keep you posted. Add another email?"
            : "Subscribe to our mailing list and we'll make sure you're the first to hear about all the good news."}
        </Typography>
        {props.status === "sending" && (
          <div className={classes.inputFieldItem}>sending...</div>
        )}
        {props.status === "error" && (
          <div
            className={`${classes.inputFieldItem} ${classes.error}`}
            dangerouslySetInnerHTML={{ __html: props.message }}
          />
        )}
        {props.status === "success" && (
          <div
            className={`${classes.inputFieldItem} ${classes.success}`}
            dangerouslySetInnerHTML={{ __html: props.message }}
          />
        )}
        <div>
          <TextField
            className={classes.inputFieldItem}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
          />
          <TextField
            className={classes.inputFieldItem}
            onChange={(e) => setFirstName(e.target.value)}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            size="small"
            fullWidth
            value={firstName}
          />
          <TextField
            className={classes.inputFieldItem}
            onChange={(e) => setLastName(e.target.value)}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            size="small"
            fullWidth
            value={lastName}
          />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </div>
      </form>
    </Grid>
  );
}

function MailchimpSub() {
  const postURL =
    "https://gravitypocatello.us14.list-manage.com/subscribe/post?u=0d91cee39eaa503e1a2ca6122&id=13e7a34015";

  return (
    <MailchimpSubscribe
      url={postURL}
      render={({ subscribe, status, message }) => (
        <CustomForm status={status} message={message} subscribe={subscribe} />
      )}
    />
  );
}

const useStyles = makeStyles({
  root: {
    padding: "15px 30px",
    backgroundColor: "#39B54A",
  },
  success: {
    color: "blue",
  },
  error: {
    color: "red",
  },
  inputFieldItem: {
    marginBottom: "10px",
  },
  formContainer: {
    maxWidth: 1024,
    margin: "auto",
    padding: "4px 0 10px 0",
  },
});

export default MailchimpSub;
