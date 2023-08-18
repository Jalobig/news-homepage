import React from "react";
import classes from "./Main.module.scss";
import MainStory from "../../components/MainStory/MainStory";
import NewStory from "../../components/NewStory/NewStory";
import FeaturedStory from "../../components/FeaturedStory/FeaturedStory";

const Main = () => {
  return (
    <main className={classes.main}>
      <MainStory />
      <NewStory />
      <FeaturedStory />
    </main>
  );
};

export default Main;
