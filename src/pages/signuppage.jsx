import React, { useEffect } from "react";
import styled from "styled-components";

import BgSignup from "../assets/background.png";
import TwitterBig from "../assets/twitterbig.svg";
import TwitterIcon from "../assets/twitter.png";

const SignUp = () => {
  useEffect(() => {
    document.title = "Signup / Twitter";
  }, []);

  return (
    <SignUpStyle>
      <SignupLeft>
        <img className="bg" src={BgSignup} alt="signup background" />
        <img className="logo" src={TwitterBig} alt="twitter" />
      </SignupLeft>

      <SignupRight>
        <img src={TwitterIcon} alt="twitter" />
        <h1>Happening Now</h1>
        <h2>Join Twitter today.</h2>
        <FormStyle>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Full Name" required />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <button type="submit">SignUp</button>
        </FormStyle>
        <button>Sign in with Google</button>
      </SignupRight>
    </SignUpStyle>
  );
};

// styled components
const SignUpStyle = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const SignupLeft = styled.div`
  width: 55vw;
  position: relative;

  img.bg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  img.logo {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const SignupRight = styled.div`
  padding: 2rem;
  height: 100vh;

  img {
    width: 40px;
  }
  h1 {
    font-size: 4rem;
    margin: 30px 0;
  }
  h2 {
    font-size: 2rem;
  }
  button {
    width: 150px;
    height: 40px;
    background: #4285f4;
    color: #fff;
    border: none;
    border-radius: 34px;
    cursor: pointer;
    margin-bottom: 20px;
    font-weight: bold;
    &:hover {
      background: #5f98f5;
    }
  }
`;
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    width: 60%;
    height: 2.5rem;
    font-size: 1rem;
    padding: 1.3rem 0.5rem;
    margin: 10px 0;
    border: 1px solid #3333;
    border-radius: 34px;

    &:focus {
      border: 2px solid #000;
      outline: none;
    }
  }
  button {
    width: 80px;
    height: 40px;
    background: #000;
    color: #fff;
    border: none;
    margin: 1rem 0;
    border-radius: 34px;
    cursor: pointer;
    &:hover {
      background: #313131;
    }
  }
`;

export default SignUp;
