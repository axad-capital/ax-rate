import React from 'react'
import './form.css'
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';

const ShortForm = () => {

  const location = useLocation();

  function handleFormSub(url) {

    let formData = {
      zip: document.getElementById('zip').value,
      // birth: document.getElementById('birth').value,
      // coverage: document.getElementById('coverage').value,
      // homeOwner: document.getElementById('homeowner').value,
      // insured: document.getElementById('insured').value,
      id: uuidv4()
    }

    localStorage.setItem('ax-rate-data', JSON.stringify(formData))

    if (url.pathname === '/goog') {
      window.location.href = '/thanks/goog'
    } else if (url.pathname === '/fb') {
      window.location.href = '/thanks/fb'
    } else {
      window.location.href = '/thanks'
    }

  }

  return (
    <div>
      <div className="short-form">
        <label htmlFor="zip">Enter Your Zipcode</label>
        <br />
        <input type="number" name="zip" id="zip" placeholder='Zipcode' />
        <br />
        <button onClick={() => handleFormSub(location)}>Submit</button>
        <br />
        <br />
        {location.pathname === '/goog' ? <p style={{ textAlign: 'center' }}>Need A Quote Quick? Contact Our Licensed Insurance Agents At <a style={{ textDecoration: 'none', fontSize: '20px' }} href='tel:18777110738'>1(877)711-0738</a></p> : location.pathname === '/fb' ? <p style={{ textAlign: 'center' }}>Need A Quote Quick? Contact Our Licensed Insurance Agents At <a style={{ textDecoration: 'none', fontSize: '20px' }} href='tel:18775573335'>1(877)557-3335</a></p> : <p style={{ textAlign: 'center' }}>Need A Quote Quick? Contact Our Licensed Insurance Agents At <a style={{ textDecoration: 'none', fontSize: '20px' }} href='tel:8884312082'>(888) 431-2082</a></p>}

        <p className="consent">By clicking “Yes” I provide my signature expressly consenting to contact from Allied Insurance Partners, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated dialing system or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy. California Residents</p>
      </div>
    </div>
  )
}

export default ShortForm