import React from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import Banner from './Banner';
import '../assets/css/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Routes />
    </div>
  );
}

export default App;
