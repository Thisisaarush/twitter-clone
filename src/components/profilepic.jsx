import React from 'react';
import styled from 'styled-components';
import ProfileIcon from '../assets/Logo.png';

const ProfilePic = () => {
  return (
    <ProfileStyle>
      <img src={ProfileIcon} alt="User Profile" />
    </ProfileStyle>
  );
}

// styled components
const ProfileStyle = styled.div`
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
    cursor: pointer;
  }
`;

export default ProfilePic;