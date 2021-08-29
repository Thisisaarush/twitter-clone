import React from "react";
import styled from "styled-components";

import ProfilePic from "./profilepic";

import TwitterLogo from "../assets/twitter.png";
import { Home } from "@styled-icons/boxicons-solid/Home";
import { Hash } from "@styled-icons/boxicons-regular/Hash";
import { Notifications } from "@styled-icons/material-outlined/Notifications";
import { MailOutline } from "@styled-icons/material/MailOutline";
import { Bookmark } from "@styled-icons/boxicons-regular/Bookmark";
import { List } from "@styled-icons/fluentui-system-filled/List";
import { Person } from "@styled-icons/bootstrap/Person";
import { MoreHorizontal } from "@styled-icons/fluentui-system-filled/MoreHorizontal";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navigation>
      <NavLinks>
        <Linked to='/home'>
          <img src={TwitterLogo} alt="twitter clone" />
        </Linked>
        <Linked to='/home'>
          <HomeIcon />
          <p>Home</p>
        </Linked>
        <Linked to='/explore'>
          <HashIcon />
          <p>Explore</p>
        </Linked>
        <Linked to='/notifications'>
          <NotificationsIcon />
          <p>Notifications</p>
        </Linked>
        <Linked to='messages'>
          <MailOutlineIcon />
          <p>Messages</p>
        </Linked>
        <Linked to='bookmarks'>
          <BookmarkIcon />
          <p>Bookmarks</p>
        </Linked>
        <Linked to='lists'>
          <ListIcon />
          <p>Lists</p>
        </Linked>
        <Linked to="/profile">
          <PersonIcon />
          <p>Profile</p>
        </Linked>
        <Linked to='/home'>
          <MoreHorizontalIcon />
          <p>More</p>
        </Linked>

        <button>Tweet</button>

        <SpanStyle>
          <ProfilePic />
          <span>
            <h4>Aarush Tanwar</h4>
            <h5>@Thisisaarush</h5>
          </span>
        </SpanStyle>
      </NavLinks>
    </Navigation>
  );
};

// styled components
const Navigation = styled.div`
  min-width: 270px;
  max-width: 270px;
  height: 100vh;
  display: flex;
  justify-content: center;
  user-select: none;
`;
const NavLinks = styled.div`
  width: 270px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;

  img {
    width: 30px;
    height: 30px;
  }

  button {
    width: max-content;
    padding: 1rem 5.5rem;
    background: #1d9bf0;
    color: white;
    border: none;
    border-radius: 34px;
    font-size: 17px;
    font-weight: 700;
    margin-top: 0.8rem;
    cursor: pointer;
  }
`;
const Linked = styled(Link)`
  
  
    width: max-content;
    padding: 0.8rem 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: black;
    text-decoration: none;

    p {
      margin-left: 20px;
    }

    &:hover {
      background: #3331;
      border-radius: 34px;
    }
  
`;

const SpanStyle = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  padding: 0rem 0.5rem;
  padding-right: 3rem;

  span {
    margin-left: -5px;

    h4 {
      font-size: 15px;
    }
    h5 {
      font-size: 15px;
      color: #3339;
      font-weight: 400;
    }
  }

  &:hover {
    background: #3332;
    border-radius: 34px;
    cursor: pointer;
  }
`;

// icons
const HomeIcon = styled(Home)`
  width: 30px;
  height: 30px;
`;
const HashIcon = styled(Hash)`
  width: 30px;
  height: 30px;
`;
const NotificationsIcon = styled(Notifications)`
  width: 30px;
  height: 30px;
`;
const MailOutlineIcon = styled(MailOutline)`
  width: 30px;
  height: 30px;
`;
const BookmarkIcon = styled(Bookmark)`
  width: 30px;
  height: 30px;
`;
const ListIcon = styled(List)`
  width: 30px;
  height: 30px;
`;
const PersonIcon = styled(Person)`
  width: 30px;
  height: 30px;
`;
const MoreHorizontalIcon = styled(MoreHorizontal)`
  width: 30px;
  height: 30px;
`;

export default NavBar;
