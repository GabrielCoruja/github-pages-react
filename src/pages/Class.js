import React from 'react'; 
import { Link } from 'react-router-dom';

const Class = () => {
  return (
    <div>
      <h1>Turma do Milho</h1>
      <img
        alt="turma-do-milho"
        src="https://www.revistamenu.com.br/wp-content/uploads/2021/04/diadomilho.jpg"
      />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Class;
