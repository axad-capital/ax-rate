import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <p>Disclaimers and Important Information:
          AxRate.com is an independent marketplace and is not a federal or state Marketplace website. AxRate.com does not provide quotes or sell insurance directly to consumers, is not affiliated with any exchange, and is not a licensed insurance agent or broker. Accordingly, you should not send us (via mail or email) any sensitive information, including personal health information or applications. Any such communications will not be treated as confidential and will be discarded, as, in offering this website, we are required to comply with the standards established under 45 CFR 155.260 to protect the privacy and security of personally identifiable information</p>
        <p>This website may not display all data on Qualified Auto Quotes being offered in your state.</p>
        <p>Advertised Pricing:
          There are several factors that impact your monthly premium; including, but not limited to your age, geographical location, annual income, dependents, and the type of plan you choose. Monthly premiums do not include out-of-pocket costs.</p>
        <div>
          <Link to='/privacy-policy'><h6>Privacy Policy</h6></Link>
          <Link to='/terms'><h6>Terms and Conditions</h6></Link>
          <Link to='/disclaimer'><h6>Disclaimer</h6></Link>
          <Link to='/partners'><h6>Partners</h6></Link>
        </div>
        <br />
        <p>&copy; 2022 AxRate</p>
      </div>
    </div>
  )
}

export default Footer