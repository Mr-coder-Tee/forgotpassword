import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route,Navigate,useParams  } from "react-router-dom";//
import Reset from './cmpts/Reset';

function App() {
  
  return (
   
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Navigate to={`/resetpassword`} replace={true}/>}/>
      {/* <Route   path="/" element={<Reset />}/> */}
      <Route  path="/resetpassword/:id" element={<Reset />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
//62216e3f991fe8a1caec1e4c