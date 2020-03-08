import React from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
