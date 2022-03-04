import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route,Navigate,useLocation  } from "react-router-dom";//
import Reset from './cmpts/Reset';

function App() {
  const location = useLocation();
  const path = location.pathname;
console.log('path',path)
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      {/* <Route path="/" element={<Navigate to="/resetpassword" replace={true}/>}/> */}
      <Route   path="/" element={<Reset />}/>
      <Route path="/resetpassword" element={<Reset />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
