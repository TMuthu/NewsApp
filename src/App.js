import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';

import './App.css';
import Homepage from './components/Homepage/Homepage';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './components/Loginpage/signup';
import Login from './components/Loginpage/login';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
            <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="login" element={<Login/>} />
                    <Route path="signup" element={<Signup/>}/>
            </Routes>
        </Router>
      </div>
    </Provider>
    
    
  );
}

export default App;
