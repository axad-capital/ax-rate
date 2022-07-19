import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About'
import Info from './pages/Info'
import Blog from './pages/Blogs'
import NavComp from './components/NavComp/NavComp';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Disclaimer from './pages/Legal/Disclaimer';
import Partners from './pages/Legal/Partners';
import Thanks from './components/Thanks/Thanks';
import ThanksLong from './components/Thanks/ThanksLong';
import PingPostLongForm from './components/Forms/PingPostLongForm';
import ThanksPing from './components/Thanks/ThanksPing';
import ThanksGoog from './components/Thanks/ThanksGoog';
import ThanksFb from './components/Thanks/ThanksFb';
import ThanksDSP from './components/Thanks/ThanksDSP';

function App() {
  return (
    <div className="App">
      <div style={{ opacity: '0', textAlign: 'center' }}>
        <a href="https://www.a1jkghtrk.com/28KL6/3F292Q1/?source_id={affiliate_id}&sub1={transaction_id}">offers!</a>
      </div>
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/goog' element={<HomePage />} />
          <Route exact path='/fb' element={<HomePage />} />
          <Route exact path='/sem' element={<HomePage />} />
          <Route exact path='/dsp' element={<HomePage />} />
          <Route exact path='/dsp-prop-pop' element={<HomePage />} />
          <Route exact path='/get-quote' element={<HomePage />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/info' element={<Info />} />
          <Route exact path='/blogs' element={<Blog />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
          <Route exact path='/thanks' element={<Thanks />} />
          <Route exact path='/thanks-dsp' element={<ThanksDSP />} />
          <Route exact path='/thanks-long' element={<ThanksLong />} />
          <Route exact path='/long-quote' element={<PingPostLongForm />} />
          <Route exact path='/thank-you-ping-form' element={<ThanksPing />} />
          <Route exact path='/thanks/goog' element={<ThanksGoog />} />
          <Route exact path='/thanks/fb' element={<ThanksFb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
