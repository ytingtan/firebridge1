import React from 'react';
import { useAuth } from './hooks/useAuth';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Header2 from './components/Header2';

function App() {

  const { user } = useAuth();
  return (
    <div className="App">
        {user ? <Header2 /> : <Header />}
        {user ? <Dashboard /> : <LandingPage />}
    </div>
  );
}

export default App;



  
