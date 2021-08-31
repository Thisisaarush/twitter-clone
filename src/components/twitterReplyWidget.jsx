import React from "react";
import { Tweet } from "react-twitter-widgets";

const TwitterReply = {
  title: "Tweet",
  component: Tweet
};

export const Basic = () => <Tweet tweetId="1413684299069419527" />;

export default TwitterReply;
