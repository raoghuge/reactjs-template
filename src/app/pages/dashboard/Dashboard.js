import React from 'react';
import './dashboard.css';
import {Translate as T } from '../../translations';

import Header from '../../components/header/Header';


function Dashboard() {
  return (
   <>
      <Header/>
      {T('welcome')}
   </>
  );
}

export default Dashboard;
