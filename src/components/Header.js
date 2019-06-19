import React from 'react';

import './Header.css';

export default function Header ({toDo, done}) {
  return (
      <div className='header'>
          <h1>My List of Tasks</h1>
          <h2> {toDo} more to do, {done} done</h2>
      </div>
  );
};

