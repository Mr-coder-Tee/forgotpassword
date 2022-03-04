import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route,Navigate,useParams ,useNavigate    } from "react-router-dom";//
import Reset from './cmpts/Reset';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Navigate to="/resetpassword" replace={true}/>}/>
      <Route path="/Dashboard" element={<Reset />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
