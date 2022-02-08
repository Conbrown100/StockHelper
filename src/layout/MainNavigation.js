import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Stock Helper</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Login">Log In</Link>
          </li>
          <li>
            <Link to="/Signup">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
