import React from 'react';
import styled from 'styled-components';
import ProfilePic from './profilepic';
import { Sparkles } from '@styled-icons/heroicons-outline/Sparkles';
import { Image } from '@styled-icons/ionicons-outline/Image';
import { EmojiSmile } from '@styled-icons/bootstrap/EmojiSmile';

import Tweet from './tweet';

const HomeComponent = () => {
  return (
    <Home>

      <HomeBar>
        <h2>Home</h2>
        <SparkleIcon />
      </HomeBar>

      <CreateTweet>
        <PicText>
          <ProfilePic />
          <input type="text" placeholder="What's happening?"/>
        </PicText>
        <TweetBar>
          <div>
          <ImageIcon />
          <EmojiIcon />
          </div>
          <button>Tweet</button>
        </TweetBar>
      </CreateTweet>

      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />

    </Home>
  );
}


// styled components
const Home = styled.div`
  min-width: 600px;
  max-width: 600px;
  border-left: 1px solid #3331;
  border-right: 1px solid #3331;
`; 

// Homebar
const HomeBar = styled.div`
  position: sticky;
  top: 0;
  background: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3331;

  h2 {
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const SparkleIcon = styled(Sparkles)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

// tweet
const CreateTweet = styled.div`
  width: 100%;
  border-bottom: 1px solid #3331;
`;
const PicText = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  input {
    border: none;
    font-size: 20px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
`;
const TweetBar = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-left: auto;

  button {
    margin-left: -20px;
    background: #1d9bf0;
    color: white;
    border: none;
    padding: 9px 19px;
    border-radius: 34px;
    font-size: 15px;
    line-height: 20px;
    cursor: pointer;
  }
`; 
const ImageIcon = styled(Image)`
  width: 20px;
  height: 20px;
  color: #1d9bf0;
  margin-right: 10px;
  cursor: pointer;
`;
const EmojiIcon = styled(EmojiSmile)`
  width: 20px;
  height: 20px;
  color: #1d9bf0;
  cursor: pointer;
`;



export default HomeComponent;
