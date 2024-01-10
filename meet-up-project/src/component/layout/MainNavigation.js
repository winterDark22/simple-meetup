import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meet Up </div>

      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
