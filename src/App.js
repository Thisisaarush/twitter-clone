import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";


import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { GlobalStyles } from "./styles/globalstyles";
import NavBar from "./components/navbar";
import TrendingBar from "./components/trendingbar";
import LoadingAnim from "./assets/loading.svg";

import { auth, createUserProfileDocument } from './firebase/firebase';

import SignUp from "./pages/signuppage";
const HomePage = React.lazy(() => import("./pages/homepage"));
const ProfilePage = React.lazy(() => import("./pages/profilepage"));
const ExplorePage = React.lazy(() => import("./pages/explorepage"));
const NotificationPage = React.lazy(() => import("./pages/notificationpage"));
const MessagesPage = React.lazy(() => import("./pages/messagespage"));
const BookmarkPage = React.lazy(() => import("./pages/bookmarkpage"));
const ListPage = React.lazy(() => import("./pages/listspage"));
const WelcomePage = React.lazy(() => import('./pages/welcomepage'));



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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/twitter-clone" component={WelcomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/notifications" component={NotificationPage} />
          <Route path="/messages" component={MessagesPage} />
          <Route path="/bookmarks" component={BookmarkPage} />
          <Route path="/lists" component={ListPage} />
        </Switch>
      </Suspense>
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
