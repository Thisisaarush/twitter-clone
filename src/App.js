import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SignUp from "./pages/signuppage";
import HomePage from "./pages/homepage";
import ProfilePage from "./pages/profilepage";
import ExplorePage from "./pages/explorepage";
import NotificationPage from "./pages/notificationpage";
import MessagesPage from "./pages/messagespage";
import BookmarkPage from "./pages/bookmarkpage";
import ListPage from "./pages/listspage";
import WelcomePage from './pages/welcomepage';

import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { GlobalStyles } from "./styles/globalstyles";
import NavBar from "./components/navbar";
import TrendingBar from "./components/trendingbar";
import LoadingAnim from "./assets/loading.svg";

import { auth, createUserProfileDocument } from './firebase/firebase';

function App() {
  // loading screen
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, []);

  // google signin states
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      } else {
        setCurrentUser(userAuth);
      }
    })
  }, []);

  // hide elements on signup page
  let location = useLocation();
  if (location.pathname === "/") {
    return (
    isLoading 
    ? 
      <ImageStyle> 
        <img src={LoadingAnim} alt='Loading...' /> 
      </ImageStyle> 
    : 
      <div> 
        <GlobalStyles /> 
        <Route exact path="/">
          {
            currentUser ? <Redirect to='/home' /> : <SignUp />
          }
        </Route>
      </div>
    )
  }

  return (
    isLoading ? <ImageStyle> <img src={LoadingAnim} alt='Loading...' /> </ImageStyle> :
    <AppStyle>
      <GlobalStyles />
      <NavBar currentUser={currentUser} />
      <Switch>
        <Route path="/:id" component={WelcomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/notifications" component={NotificationPage} />
        <Route path="/messages" component={MessagesPage} />
        <Route path="/bookmarks" component={BookmarkPage} />
        <Route path="/lists" component={ListPage} />
      </Switch>
      <TrendingBar />
    </AppStyle>
  );
}

// styled components
const AppStyle = styled.div`
  display: flex;
  justify-content: center;
`;
const ImageStyle = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export default App;
