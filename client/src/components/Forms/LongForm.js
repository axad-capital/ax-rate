import React from 'react'
import './form.css'
import { v4 as uuidv4 } from 'uuid';

const LongForm = () => {

    function handleFormSub() {
        let formData = {
            zip: document.getElementById('zip').value,
            // birth: document.getElementById('birth').value,
            // coverage: document.getElementById('coverage').value,
            // homeOwner: document.getElementById('homeowner').value,
            // insured: document.getElementById('insured').value,
            id: uuidv4()
        }
    
        localStorage.setItem('ax-rate-data-long', JSON.stringify(formData))
        window.location.href = '/thanks-long'
    }

    return (
        <div>
            <div className="short-form">
                <label htmlFor="zip">Enter Your Zipcode</label>
                <br />
                <input type="number" name="zip" id="zip" placeholder='Zipcode' />
                <br />

                <label htmlFor="age">Enter Your Age</label>
                <br />
                <input type="number" name="age" id="age" placeholder='Age' />
                <br />

                <label htmlFor="credit">What Is Your Credit Score?</label>
                <br />
                <select type="number" name="credit" id="credit">
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                </select>
                <br />

                <label htmlFor="insured">Are You Currently Insured?</label>
                <br />
                <select type="text" name="insured" id="insured">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />

                <label htmlFor="dui">Do You Have A DUI/DWI?</label>
                <br />
                <select type="text" name="dui" id="dui">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br />

                <label htmlFor="sr-22">Do You Have Any SR-22?</label>
                <br />
                <select type="text" name="sr-22" id="sr-22">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br />

                <button onClick={handleFormSub}>Submit</button>
                <br />
                <p>Need A Quote Quick? Contact Our Licensed Insurance Agents At (888) 431-2082</p>
                <p className="consent">By clicking “Yes” I provide my signature expressly consenting to contact from Allied Insurance Partners, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated dialing system or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy. California Residents</p>
            </div>
        </div>
    )
}

export default LongForm