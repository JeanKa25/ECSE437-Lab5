/* eslint-disable max-len */
import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "../heading";
import Layout from "../layout";
import { useWindowSize } from "../../hooks/window-size";
import PhotoBlobs from "./photoblobs";

const useStyles = createUseStyles({
  contentDiv: {
    paddingTop: "4em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&.fitContent": {
      minHeight: "fit-content",
      margin: "0 1em",
    },
    "&.desktop": {
      height: "100vh",
      margin: "0 1em",
    },
  },
  verticalDisplay: {
    flexDirection: "column",
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "68ch",
    fontSize: "20px",
    flexGrow: 1,
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "2em",
  },
  aboutMeLink: {
    margin: "0 0.5em",
  },
});

export const AboutMe = () => {
  const classes = useStyles();
  const desktop = useWindowSize() === "desktop";

  return (
    <Layout>
      <div
        id="aboutme"
        className={
          desktop
            ? `${classes.contentDiv} desktop`
            : `${classes.contentDiv} fitContent`
        }
      >
        <div className={classes.textContent}>
          <Heading title="About Me" />
          <div>
            <p>
              Hey there! My name is Jonathan Batanian and I’m a software engineer based in
              Quebec, Canada.
            </p>
            <p>I’m currently pursuing a Bachelor’s degree in Software Engineering at McGill University and completing co-op internships to gain hands-on experience in the field. I am interested in software development, web technologies, and systems engineering.</p>
            <p>My main interests are building impactful software solutions, exploring emerging technologies, and contributing to projects that blend creativity with technical problem-solving.</p>
            <p>Some of my hobbies include playing video games, discovering new cafés, and going out with friends. Also I like learning about tech startups and working on personal coding projects in my free time.</p>
          </div>
        </div>
        {desktop ? <PhotoBlobs /> : null}
      </div>
    </Layout>
  );
};

export default AboutMe;
