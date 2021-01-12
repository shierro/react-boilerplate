import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './containers/HomePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Default metadata" />
        </Helmet>
        <div className="App">
          <Header />
          <Switch>
            <Route path={(process.env.PUBLIC_URL || '') + '/'} component={HomePage} />
          </Switch>
          <Footer />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
