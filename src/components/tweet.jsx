import React from 'react';
import styled from 'styled-components';
import ProfilePic from './profilepic';
import BoysPic from '../assets/boys.jpg';
import { Comment } from '@styled-icons/evil/Comment';
import { Retweet } from '@styled-icons/evil/Retweet';
import { Heart } from '@styled-icons/feather/Heart';
import { Share } from '@styled-icons/feather/Share';


const Tweet = () => {
  return (
    <TweetStyle>

        <ProfilePic />

        <ActualTweet>
          <UserName>
          <h4>Aarush Tanwar</h4>
          <h5>@Thisisaarush 1h</h5>
          </UserName>
          <TweetContent>
            <p>This is a Sample Tweet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. 😂 <span>#twitterclone #reactOP #webdev</span>  </p>
            <img src={BoysPic} alt="boys" />
            <Icons>
              <CommentStyle />
              <RetweetStyle />
              <HeartStyle />
              <ShareStyle />
            </Icons>
          </TweetContent>
      </ActualTweet>

    </TweetStyle>
  );
}


// styled components
const TweetStyle = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid #3331;
`;
const ActualTweet = styled.div`

`;
const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  h4 {
    font-size: 15px;
    margin-right: 10px;
  }
  h5 {
    font-size: 15px;
    color: #3339;
    font-weight: 400;
  }
`;

const TweetContent = styled.div`

  p {
    margin-bottom: 20px;
    font-size: 15px;

    span {
      color: #1d9bf0;
    }
  }

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 16px;
    cursor: pointer;
    margin-bottom: 15px;
  }
`;
const Icons = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  position: relative;
  left: -30px;
`;
// icons
const CommentStyle = styled(Comment)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const RetweetStyle = styled(Retweet)`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;
const HeartStyle = styled(Heart)`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const ShareStyle = styled(Share)`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export default Tweet;