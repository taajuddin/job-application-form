import React from 'react';
import ApplicationForm from './ApplicationForm'
import {BrowserRouter, Route} from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import './style.css';

function App() {
  return (
  	<BrowserRouter>
    <div className="App">
    	<Route path="/" component={ApplicationForm} exact={true}/>
    	<Route path="/admin" component={AdminDashboard}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
