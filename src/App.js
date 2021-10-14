import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppBar from "./components/AppBar";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid container>
      <Router>
        <AppBar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/donate" exact component={() => <Donate />} />
        </Switch>
        <Footer />
      </Router>
    </Grid>
  );
}

export default App;
