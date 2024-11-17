import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Login'
import Publisher from './components/Publisher';
import Viewer from './components/Viewer';
import { AppProvider, AuthRedirect } from './provider/AppProvider'

const App: React.FC =() => {
  return (
    <AppProvider>
      <Router>
      <AuthRedirect />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/publisher" element={<Publisher/>} />
          <Route path="/viewer" element={<Viewer/>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
