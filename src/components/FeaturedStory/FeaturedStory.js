import React from "react";
import classes from "./FeaturedStory.module.scss";
import ImgGaming from "../../assets/images/image-gaming-growth.jpg";
import ImgRetro from "../../assets/images/image-retro-pcs.jpg";
import ImgLaptops from "../../assets/images/image-top-laptops.jpg";

const FeaturedStory = () => {
  return (
    <>
      <div className={`${classes.story__item} ${classes["story__item--1"]}`}>
        <img src={ImgRetro} alt="Very old Computer" />
        <div className={classes.story__group}>
          <h2 className={classes["story__heading--number"]}>01</h2>
          <h3 className={classes["story__heading--2"]}>Reviving Retro PCs</h3>
          <p className={classes.story__description}>
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className={`${classes.story__item} ${classes["story__item--2"]}`}>
        <img src={ImgLaptops} alt="Keyboard of a laptop" />
        <div className={classes.story__group}>
          <h2 className={classes["story__heading--number"]}>02</h2>
          <h3 className={classes["story__heading--2"]}>
            Top 10 Laptops of 2022
          </h3>
          <p className={classes.story__description}>
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className={`${classes.story__item} ${classes["story__item--3"]}`}>
        <img src={ImgGaming} alt="Gaming controller floating in the air" />
        <div className={classes.story__group}>
          <h2 className={classes["story__heading--number"]}>03</h2>
          <h3 className={classes["story__heading--2"]}>The Growth of Gaming</h3>
          <p className={classes.story__description}>
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeaturedStory;
