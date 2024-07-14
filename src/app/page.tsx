import React from 'react';

const Home = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <a href="/api/auth/login">
            LOGIN
          </a>
      </div>
    </div>
  );
};

export default Home;
