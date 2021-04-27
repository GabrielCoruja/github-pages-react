import React from 'react';
import { Link } from 'react-router-dom';

const Soccer = () => {
  return (
    <div>
      <h1>Futebol de campo</h1>
      <img
        alt="futebol-de-campo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7STNtTb910niK-CTK6FVympE36huFZRQTg&usqp=CAU"
      />
      <ul>
        <li>
          <Link to="/github-pages-react">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Soccer;
