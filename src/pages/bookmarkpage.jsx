import React, { useEffect } from 'react';


const BookmarkPage = () => {
  useEffect(() => {
    document.title = 'Bookmarks / Twitter';
  }, []);

  return (
    <div>
      <h1>Bookmark Page Coming Soon... </h1>
    </div>
  );
}

export default BookmarkPage;