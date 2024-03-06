import React from 'react';
import URLShortnerForm from './components/URLShortnerForm';
import Header from './components/Header/Header';
import Home from './components/Homepage/Home';
import "./App.css"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <URLShortnerForm/> */}
      <Home/>
      <Footer/>

    </div>
  );
}

export default App;
