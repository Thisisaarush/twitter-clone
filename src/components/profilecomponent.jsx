import React from "react";
import styled from "styled-components";
import ProfilePic from "./profilepic";
import Banner from "../assets/banner.jpg";

import Tweet from "./tweet";

const ProfileComponent = () => {
  return (
    <ProfileHome>
      <ProfileBar>
        <h2>Aarush Tanwar</h2>
        <p>795 Tweets</p>
      </ProfileBar>

      <ProfileStyle>
        <BannerStyle>
          <BannerImg src={Banner} alt="banner" />
          <ProfilePicStyle>
            <ProfilePic />
          </ProfilePicStyle>
        </BannerStyle>
        <h5>Edit profile</h5>
        <UserInfo>
          <h3>Aarush Tanwar</h3>
          <p>@Thisisaarush</p>
          <p>Developer 👀</p>
          <span>
            <p>Jaipur</p>
            <p>Born July 13</p>
            <p>Joined December 2013</p>
          </span>
          <span>
            <p>
              <span>947</span> Following
            </p>
            <p>
              <span>284</span> Followers
            </p>
          </span>
        </UserInfo>
        
      </ProfileStyle>

      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </ProfileHome>
  );
};

// styled components
const ProfileHome = styled.div`
  min-width: 600px;
  max-width: 600px;
  border-left: 1px solid #3331;
  border-right: 1px solid #3331;
`;

// Homebar
const ProfileBar = styled.div`
  position: sticky;
  top: 0;
  background: #fff;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #3331;

  h2 {
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
  p {
    font-size: 0.8rem;
    color: #3339;
  }
`;

// profile style
const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid #3331;

  h5 {
    font-size: 0.9rem;
    position: absolute;
    top: 55%;
    right: 20px;
    border: 1px solid #cecece;
    border-radius: 34px;
    padding: 0.4rem 1rem;
    cursor: pointer;
  }
`;
const BannerStyle = styled.div`
  position: relative;
`;
const BannerImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const ProfilePicStyle = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  bottom: -60px;
  left: 10px;
  border-radius: 50%;

  img {
    width: 101%;
    height: 101%;
    border: 5px solid white;
  }
`;
const UserInfo = styled.div`
  margin-top: 70px;

  span, p {
    display: flex;
  }
  p {
    color: #3339;
    margin-bottom: 10px;
    margin-right: 30px;

    span {
      font-weight: bold;
      color: #000;
      margin-right: 5px;
    }
  }
`;



export default ProfileComponent;
