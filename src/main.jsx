import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photo from './pages/Photo.jsx';
import NotFound from './pages/NotFound.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter basename='/'>
   
   <Routes>
    <Route path='/' element={<App/>}>

    <Route index element={<Home/>}/>
    <Route path='photo' element={<Photo/>}/>
    <Route path='*' element={<NotFound/>}/>

    </Route>
    </Routes>
     
   </BrowserRouter>
  </React.StrictMode>,
)
