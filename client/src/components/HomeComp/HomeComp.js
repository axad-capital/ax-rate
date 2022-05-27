import React from 'react'
import './homeComp.css'
import HeaderImg from './ax-rate-header-img.png'
import ShortForm from '../Forms/ShortForm'
import LongForm from '../Forms/LongForm'
import Footer from '../Footer/Footer'
import AxCover from './axrate_cover.png'
import { useLocation } from 'react-router-dom';

const HomeComp = () => {

  const location = useLocation();

  return (
    <div>
      <div className="header-container">
        <div className="header-info">
          <h1 className="header-title">Get A Quote And Cut Down Your Auto Insurance Rates</h1>
          <h3 className="header-sub-title">Start requesting your personalized car insurance quotes in just minutes. We will match you with insurers that best fit your needs and budget.</h3>
          <div id='form' className="form">
            {location.pathname === '/' ? <ShortForm /> : <LongForm />}
          </div>
        </div>
        <div className="header-img-container">
          <img src={HeaderImg} alt="car" className="header-img" />
        </div>
      </div>

      <div className="get-your-container">
        <div className="get-your-info">
          <h1 className="get-your-title">Get Your Auto Quote Today</h1>
          <p className="get-your-sub-title">Join with over hundreds of customers in your area who already saved big</p>
        </div>
        <div className="get-quote-btn-container">
          <a href='#form' className="get-quote-btn">Get Quotes Today</a>
        </div>
      </div>

      <h1 className="how-it-works-title">How It Works</h1>
      <div className="how-it-works-container">
        <div className="how-it-works">
          <h5>Construct Your Profile</h5>
          <p>Build your profile by telling us a little about yourself and your car.</p>
        </div>
        <div className="how-it-works">
          <h5>Compare Insurance Providers</h5>
          <p>While not all insurers show prices, we filter down to the most relevant options based on your profile.</p>
        </div>
        <div className="how-it-works">
          <h5>Connect With Licensed Insurance Agents</h5>
          <p>Either connect online or over the phone to compare quotes and maximize your savings.</p>
        </div>
      </div>

      <div className="coverImg">
        <img className='axcover' src={AxCover} alt="get a quote" />
      </div>

      <div className="why-container">
        <h1 className="why-title">Why Choose Ax Rate</h1>
        <p className="why-sub-title">Multiple reasons why you should choose us over other online providers</p>
        <br />
        <div className="why-info">
          <div className="whys">
            <h2>We're Autonomous</h2>
            <p>As we are not affiliated with any of the insurance carriers we present, our only mission is to provide you with an unbiased selection of the most relevant and affordable options.</p>
          </div>
          <div className="whys">
            <h2>We're Efficient</h2>
            <p>Forget about the time-wasting ordeals of the past, with long forms and endless questions. Getting insurance through the Axrate.com system is faster than you can get yourself into trouble.</p>
          </div>
          <div className="whys">
            <h2>We're Secure</h2>
            <p>We go to great lengths to make sure that all the information you provide us is safe and private behind the most sophisticated encryption software. Because your privacy is our concern.</p>
          </div>
          <div className="whys">
            <h2>We're Experienced</h2>
            <p>Connecting thousands of Americans to their right policies on a daily basis. That is all we do. We give you the right information to help you make the right choices. It works.</p>
          </div>
        </div>

        <div className="get-your-container">
          <div className="get-your-info">
            <h1 className="get-your-title">Get Your Auto Quote Today</h1>
            <p className="get-your-sub-title">Join with over hundreds of customers in your area who already saved big</p>
          </div>
          <div className="get-quote-btn-container">
            <a href='#form' className="get-quote-btn">Get Quotes Today</a>
            <p className='get-quote-num'>Call (888) 431-2082 To Speak With Our Licensed Insurance Agents For Quick Assistance</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomeComp