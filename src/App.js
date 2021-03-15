import React from 'react';
import './App.css';

// our own components
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Masyi</h1>
      </header> */}
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
