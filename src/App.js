import { Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import News from "./pages/News";
import Profile from "./pages/Profile";
import MainNavigation from "./layout/MainNavigation";
import Card from "./ui/Card";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/News">
          <News />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
