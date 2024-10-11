// src/pages/Home.tsx

import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext.tsx';

const Home: React.FC = () => {
  const userContext = useContext(UserContext);  // Access the context
  const [username, setUsername] = useState('');

  // Handle cases where userContext is undefined
  if (!userContext) {
    throw new Error('UserContext must be used within a UserProvider');
  }

  const { user, login } = userContext;

  const handleLogin = () => {
    if (username) {
      login(username);
    }
  };

  if (!user) {
    return (
      <div>
        <h1>Please Log In</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <nav>
        <a href="/">Home</a> | <a href="/profile">Profile</a> | <a href="/categories">Categories</a>
      </nav>
    </div>
  );
};

export default Home;
