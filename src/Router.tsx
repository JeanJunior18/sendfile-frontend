import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Home from './pages/Home'
import Send from './pages/Send'


const src: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' component={Send} />
      </Switch>
    </BrowserRouter>
  );
}

export default src;