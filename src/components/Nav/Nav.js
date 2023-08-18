import React, { useState } from "react";
import classes from "./Nav.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import IconMenu from "../../assets/images/icon-menu.svg";
import IconClose from "../../assets/images/icon-menu-close.svg";

const Nav = () => {
  const media = useMediaQuery("only screen and (max-width:500px)");
  const [isActive, setIsActive] = useState(false);
  const toggleMenuHandler = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <>
      {media ? (
        <img
          src={IconMenu}
          alt="Icon of a menu hamburger"
          className={classes.nav__menu}
          onClick={toggleMenuHandler}
        />
      ) : (
        <nav className={classes.nav}>
          <ul className={classes.nav__list}>
            <li className={classes["nav__list-item"]}>Home</li>
            <li className={classes["nav__list-item"]}>New</li>
            <li className={classes["nav__list-item"]}>Popular</li>
            <li className={classes["nav__list-item"]}>Trending</li>
            <li className={classes["nav__list-item"]}>Categories</li>
          </ul>
        </nav>
      )}
      {isActive && (
        <>
        <div className={classes.backdrop}></div>
        <nav className={classes.navmobile}>
          <img
            src={IconClose}
            alt="Icon of a close button"
            className={classes.navmobile__icon}
            onClick={toggleMenuHandler}
            />

          <ul className={classes["navmobile__list"]}>
            <li className={classes["navmobile__list-item"]}>Home</li>
            <li className={classes["navmobile__list-item"]}>New</li>
            <li className={classes["navmobile__list-item"]}>Popular</li>
            <li className={classes["navmobile__list-item"]}>Trending</li>
            <li className={classes["navmobile__list-item"]}>Categories</li>
          </ul>
        </nav>
            </>
      )}
    </>
  );
};

export default Nav;
