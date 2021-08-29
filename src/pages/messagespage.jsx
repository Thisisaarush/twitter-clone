import React, { useEffect } from 'react';



const MessagesPage = () => {

  useEffect(() => {
    document.title = 'Messages / Twitter';
  }, []);

  return (
    <div>
      <h1>Messages Page Coming Soon... </h1>
    </div>
  );
}

export default MessagesPage;