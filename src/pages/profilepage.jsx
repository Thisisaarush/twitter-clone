import React, { useEffect } from 'react';
import ProfileComponent from '../components/profilecomponent';


const ProfilePage = () => {

  useEffect(() => {
    document.title = 'Aarush Tanwar (@Thisisaarush) / Twitter';
  }, []);

  return (
    <div>
      <ProfileComponent />
    </div>
  );
}

export default ProfilePage;