// src/pages/Profile.tsx

import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext.tsx';
import { Navigate } from 'react-router-dom';

const Profile: React.FC = () => {
    const userContext = useContext(UserContext); 
    if (!userContext) {
        throw new Error('UserContext must be used within a UserProvider');
      }
    


  const { user } = userContext;

  if (!user) return <Navigate to="/" />;

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <h2>Favorites</h2>
      {user.favorites.length ? (
        <ul>
          {user.favorites.map((item, index) => (
            <li key={index}>
              <a href={`/item/${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default Profile;
