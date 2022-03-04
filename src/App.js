import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route,Navigate,useParams  } from "react-router-dom";//
import Reset from './cmpts/Reset';

function App() {
  // const location = useLocation();
  // const path = location.pathname;
// console.log('path',path)
const [r,setr]=useState(false)
  return (
   
    <div className="App">
     {
       r?(<div>
         <h1>Password reseted</h1>
       </div>):(<Reset setr={setr}/>)
     }
    </div>
  );
}

export default App;
