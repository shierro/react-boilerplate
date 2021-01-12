import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import logo from '../../logo.svg';
import useStyles from './styles';

const HomePage: React.FC = () => {
  const { root } = useStyles();
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React Boilerplate application homepage" />
      </Helmet>
      <div className={root}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    </>
  );
};

export default HomePage;
