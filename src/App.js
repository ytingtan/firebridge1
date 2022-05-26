import React from 'react';
import Header from './components/Header';
import About from './components/About';
import TopStats from './components/TopStats';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
    <Header />
    <main>
    <About />
    <TopStats />
    <LogIn />
    <SignUp />
    </main>
    </div>
  );
}

export default App;



  
