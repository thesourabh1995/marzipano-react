import React from 'react';
import './App.css';

import { data } from './data';
import Outlet1 from './components/Outlets/Outlet1';
import Mall from './Mall/Mall';

const App = () => (
  <div className="App">
    <Mall data={data}/>
  </div>
);

export default App;