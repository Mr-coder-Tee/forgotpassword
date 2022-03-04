import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route,Navigate,useParams  } from "react-router-dom";//
import Reset from './cmpts/Reset';

function App() {
  
  return (
   
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Navigate to={`/resetpassword/1`} replace={true}/>}/>
      {/* <Route   path="/" element={<Reset />}/> */}
      <Route exact path="/resetpassword/:id" element={<Reset />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
