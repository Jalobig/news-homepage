import React from 'react'
import classes from './NewStory.module.scss'

const NewStory = () => {
  return (
    <>
    <div className={classes.summary}>
        <h2 className={classes["summary__heading--1"]}>New</h2>
        <div className={classes.summary__group}>
          <h3 className={classes["summary__heading--2"]}>
            Hydrogen VS Electric Cars
          </h3>
          <p className={classes.summary__text}>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <hr />
        <div>
          <h3 className={classes["summary__heading--2"]}>
            The Downsides of AI Artistry
          </h3>
          <p className={classes.summary__text}>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr />
        <div>
          <h3 className={classes["summary__heading--2"]}>
            Is VC Funding Drying Up?
          </h3>
          <p className={classes.summary__text}>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </>
  )
}

export default NewStory