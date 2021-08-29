import React, { useEffect } from 'react';
import HomeComponent from '../components/homecomponent';


const HomePage = () => {

  useEffect(() => {
    document.title = 'Home / Twitter';
  });

  return (
    <div>
      <HomeComponent />
    </div>
  );
}

export default HomePage;