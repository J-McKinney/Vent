import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
