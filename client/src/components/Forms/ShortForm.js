import React from 'react'
import './form.css'

const ShortForm = () => {
  return (
    <div>
        <div className="short-form">
            <label htmlFor="zip">Enter Your Zipcode</label>
            <br />
            <input type="number" name="zip" id="zip" placeholder='Zipcode' />
            <br />
            <button>Submit</button>
            <br />
            <p>Need A Quote Quick? Contact Our Licensed Insurance Agents At (888) 431-2082</p>
            <p className="consent">By clicking “Yes” I provide my signature expressly consenting to contact from Allied Insurance Partners, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated dialing system or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy. California Residents</p>
        </div>
    </div>
  )
}

export default ShortForm