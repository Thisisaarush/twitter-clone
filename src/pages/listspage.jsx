import React, { useEffect } from 'react';



const ListPage = () => {

  useEffect(() => {
    document.title = 'Lists / Twitter';
  }, []);

  return (
    <div>
      <h1>List Page Coming Soon...</h1>
    </div>
  );
}

export default ListPage;