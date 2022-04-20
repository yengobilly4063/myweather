import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" from="*" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
