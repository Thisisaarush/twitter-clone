import React, { useEffect } from 'react';


const ExplorePage = () => {

  useEffect(() => {
    document.title = 'Explore / Twitter';
  }, []);

  return (
    <div>
      <h1>Explore Page Coming Soon...</h1>
    </div>
  );
}

export default ExplorePage;