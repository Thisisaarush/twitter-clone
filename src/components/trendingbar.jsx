import React from 'react';
import styled from 'styled-components';


const TrendingBar = () => {
  return (
    <TrendingStyle>
      <InputStyle>
        <input type="text" placeholder='Search Twitter' />
      </InputStyle>

      <Heading>
        <h2>What's happening</h2>
        <Trend>
          <p>Cricket . LIVE</p>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, unde?</h4>
          <p>Trending with <span>#engvsindia</span></p>
        </Trend>
        <Trend>
          <p>Cricket . LIVE</p>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, unde?</h4>
          <p>Trending with <span>#engvsindia</span></p>
        </Trend>
        <Trend>
          <p>Cricket . LIVE</p>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, unde?</h4>
          <p>Trending with <span>#engvsindia</span></p>
        </Trend>
        <Trend>
          <p>Cricket . LIVE</p>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, unde?</h4>
          <p>Trending with <span>#engvsindia</span></p>
        </Trend>
        <Trend>
          <p>Cricket . LIVE</p>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, unde?</h4>
          <p>Trending with <span>#engvsindia</span></p>
        </Trend>
        <Trend>
          <p>Cricket . LIVE</p>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, unde?</h4>
          <p>Trending with <span>#engvsindia</span></p>
        </Trend>
        <Trend>
          <p>Cricket . LIVE</p>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, unde?</h4>
          <p>Trending with <span>#engvsindia</span></p>
        </Trend>
      </Heading>

    </TrendingStyle>
  );
}

// styled components
const TrendingStyle = styled.div`
  min-width: 350px;
  max-width: 350px;
  padding: 0rem 1rem;
  margin-left: 10px;
`;
const InputStyle = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background: #fff;
  margin-bottom: 20px;

  input {
    width: 100%;
    background: rgba(231, 231, 231, 0.548);
    border: none;
    border-radius: 34px;
    padding: 0.8rem 1rem;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 15px;

    &:focus {
      outline: none;
    }
  }
`;
const Heading = styled.div`
  background: rgba(231, 231, 231, 0.288);
  border-radius: 16px;
  padding: 1rem;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const Trend = styled.div`
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    font-size: 13px;
    color: #3339;
    span {
      color: #1d9bf0;
    }
  }
  h4 {
    font-size: 15px;
    margin: 5px 0px;
  }
`;

export default TrendingBar;