import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Homepage/Home';
import "./App.css"
import MyUrls from './pages/myUrls/MyUrls';
import Signup from "./components/registration/signup";
import Signin from "./components/registration/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/myurls' element={<MyUrls/>}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
