import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import  Navbar from './components/Navbar/Navbar';
import Video from './components/VideoDect/Video';
import Image from './components/ImageDect/Image';
import ScrollToTop from './components/ScrollToTop';
import MailchimpForm from './components/Footer/MailchimpForm';
import Signup from './Signup';
import Skills from './components/Skills';
import Pricing from './components/Pricing/Pricing';
import Home from './Home'
import "./App.css";


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Aboutus' element={<Skills/>}/>
        <Route exact path='/Services' element={<Pricing/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path="Video" element={ <Video/> } />
        <Route exact path="Image" element={ <Image/> } />
      </Routes>
      <MailchimpForm/>
    </Router>
  );
}

export default App;
