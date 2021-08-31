import React from 'react';
import styled from 'styled-components';

import TwitterIcon from '../assets/twitter.png';


function WelcomePage() {
  return (
    <WelcomeStyle>
      <img src={TwitterIcon} alt="twitter" />
      <h1>Please 'Sign In' to continue to Twitter-clone 🐤🔥✌️</h1>
      <h2>←</h2>
    </WelcomeStyle>
  );
}

// styled components
const WelcomeStyle = styled.div`
  height: 100vh;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 50px;
  }

  h2 {
    font-size: 10rem;
    margin-right: 2rem;
  }
`;

export default WelcomePage;
