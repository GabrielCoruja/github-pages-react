import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Renatão, Gabi, Thiago, Costelinha, Amandinha
        </a>
        <ul>
          <li>
            <Link to="/github-pages-react/soccer">Soccer</Link>
          </li>
          <li>
            <Link to="/github-pages-react/class">Class</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Home;
