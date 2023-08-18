import React from 'react'
import useMediaQuery from "../../hooks/useMediaQuery";
import Web3Desktop from "../../assets/images/image-web-3-desktop.jpg";
import Web3Mobile from "../../assets/images/image-web-3-mobile.jpg";
import Button from "../../components/Button/Button";
import classes from './MainStory.module.scss'
const MainStory = () => {
    const media = useMediaQuery("only screen and (max-width:700px)");
  return (
    <>
        {media ? (
        <img
          src={Web3Mobile}
          alt="Web 3 Illustration"
          className={classes["main__img--mobile"]}
        />
      ) : (
        <img
          src={Web3Desktop}
          alt="Web 3 Illustration"
          className={classes["main__img--desktop"]}
        />
      )}
      <h1 className={classes["main__heading--1"]}>
        The Bright Future of Web 3.0?
      </h1>
      <div className={classes.main__description}>
        <p className={classes["main__description--text"]}>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <Button>Read more</Button>
      </div>
    </>
  )
}

export default MainStory