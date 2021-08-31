import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterUserWidget = {
  title: "Timeline",
  component: Timeline
};

export const ListBasic = () => (
  <Timeline
    dataSource={{
      sourceType: "list",
      ownerScreenName: "twitter",
      id: "214727905"
    }}
  />
);


export default TwitterUserWidget;

