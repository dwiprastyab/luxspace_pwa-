import React, { Component } from 'react';
import Header from './components/Header.js';

function App() {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Tailwind and create React App
        </h1>
        <p className="text-base text-gray-700 leading-normal">
          building apps together
        </p>
      </div>
    </div>
  );
}

export default App;
