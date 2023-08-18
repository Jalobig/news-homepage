import React from "react";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes['nav__list-item']}>Home</li>
        <li className={classes['nav__list-item']}>New</li>
        <li className={classes['nav__list-item']}>Popular</li>
        <li className={classes['nav__list-item']}>Trending</li>
        <li className={classes['nav__list-item']}>Categories</li>
      </ul>
    </nav>
  );
};

export default Nav;
