import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Router } from "@reach/router";

import ProfileList from './screens/ProfileList'
import ProfileDetail from './screens/ProfileDetail';

import ProfileState from './context/profile/ProfileState';

ReactDOM.render(
  <React.StrictMode>
    <ProfileState>
      <Router>
        <ProfileList path="/" />
        <ProfileDetail path="profile-detail/:id" />
      </Router>
    </ProfileState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
