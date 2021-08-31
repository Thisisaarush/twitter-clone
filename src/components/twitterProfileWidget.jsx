import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterWidget = {
  title: "Timeline",
  component: Timeline
};

export const ProfileBasic = () => (
  <Timeline dataSource={{ sourceType: "profile", screenName: "thisisaarush" }} />
);


export default TwitterWidget;

