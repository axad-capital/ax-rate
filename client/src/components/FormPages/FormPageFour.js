import React, { useState } from 'react'

const FormPageFour = (props) => {

    const [hide, setHide] = useState('none')
    const [hideAccident, setHideAccident] = useState('none')

    function showOrHide() {
        if (document.getElementById('ticket').value === 'Yes') {
            setHide('')
        } else {
            setHide('none')
        }

        if (document.getElementById('accident').value === 'Yes') {
            setHideAccident('')
        } else {
            setHideAccident('none')
        }
    }

    return (
        <div>
            <div className="form-extra-info">
                <h5 className="long-form-steps">Step 4 of 4</h5>
                <div className='previous-container'>
                    <button id='previous' onClick={props.last}>Start Over</button>
                </div>
                <br />

                <label htmlFor="months-address">How long have you lived at your current address?</label>
                <br />
                <select name="months-address" id="months-address">
                    <option value="1">1 month</option>
                    <option value="2">2 months</option>
                    <option value="3">3 months</option>
                    <option value="4">4 months</option>
                    <option value="5">5 months</option>
                    <option value="6">6 months</option>
                    <option value="7">7 months</option>
                    <option value="8">8 months</option>
                    <option value="9">9 months</option>
                    <option value="10">10 months</option>
                    <option value="11">11 months</option>
                    <option value="12">12 months</option>
                    <option value="More than 12">More than 12 months</option>
                </select>
                <br />
                <br />

                <label htmlFor="current-insure-ex">If you are currently insured, what is the expiration date?</label>
                <br />
                <input type="date" name="current-insure-ex" id="current-insure-ex" />
                <br />
                <br />

                <label htmlFor="ticket">Have you ever received at ticket?</label>
                <br />
                <select onChange={showOrHide} name="ticket" id="ticket">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br />
                <br />

                <div style={{ display: hide }}>
                    <label htmlFor="ticket-date">What is the date of your last ticket?</label>
                    <br />
                    <input type="date" name="ticket-date" id="ticket-date" />
                    <br />
                    <br />

                    <label htmlFor="violation-date">What is the date of your that violation?</label>
                    <br />
                    <input type="date" name="violation-date" id="violation-date" />
                    <br />
                    <br />
                </div>

                <label htmlFor="accident">Have you ever been in an accident?</label>
                <br />
                <select onChange={showOrHide} name="accident" id="accident">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br />
                <br />

                <div style={{ display: hideAccident }}>
                    <label htmlFor="accident-date">What is the date of your last accident?</label>
                    <br />
                    <input type="date" name="accident-date" id="accident-date" />
                    <br />
                    <br />

                    <label htmlFor="claim-date">What is the date of your last claim?</label>
                    <br />
                    <input type="date" name="claim-date" id="claim-date" />
                    <br />
                    <br />

                    <label htmlFor="claim-pay">What was your claim payout?</label>
                    <br />
                    <input type="number" name="claim-pay" id="claim-pay" />
                    <br />
                    <br />
                </div>

                <label htmlFor="collision-deduct">Requested vehicle collision deductibles</label>
                <br />
                <select name="collision-deduct" id="collision-deduct">
                    <option value="250">Less than $250</option>
                    <option value="500">$250 - $500</option>
                    <option value="1000">$500 - $1,000</option>
                    <option value="5000">$1,000 - $5,000</option>
                    <option value="10000">$5,000 - $10,000</option>
                </select>

                <label htmlFor="property-damage">Requested property damage</label>
                <br />
                <select name="property-damage" id="property-damage">
                    <option value="10000">Less than $10,000</option>
                    <option value="20000">$10,000 - $20,000</option>
                    <option value="30000">$20,000 - $30,000</option>
                    <option value="40000">$30,000 - $40,000</option>
                    <option value="50000">$40,000 - $50,000</option>
                    <option value="60000">$50,000 - $60,000</option>
                    <option value="70000">$60,000 - $70,000</option>
                    <option value="80000">$70,000 - $80,000</option>
                    <option value="90000">$80,000 - $90,000</option>
                    <option value="100000">$90,000 - $100,000</option>
                </select>
                <br />
                <br />

                <label htmlFor="months-insured">How long have you currently been insured?</label>
                <br />
                <select name="months-insured" id="months-insured">
                    <option value="">I am not insured</option>
                    <option value="1">1 month</option>
                    <option value="2">2 months</option>
                    <option value="3">3 months</option>
                    <option value="4">4 months</option>
                    <option value="5">5 months</option>
                    <option value="6">6 months</option>
                    <option value="7">7 months</option>
                    <option value="8">8 months</option>
                    <option value="9">9 months</option>
                    <option value="10">10 months</option>
                    <option value="11">11 months</option>
                    <option value="12">12 months</option>
                    <option value="More than 12">More than 12 months</option>
                </select>
                <br />
                <br />

                <button onClick={() => props.longFormSubmit(
                    document.getElementById('months-address').value,
                    document.getElementById('current-insure-ex').value,
                    document.getElementById('ticket-date').value,
                    document.getElementById('violation-date').value,
                    document.getElementById('accident-date').value,
                    document.getElementById('claim-date').value,
                    document.getElementById('claim-pay').value,
                    document.getElementById('collision-deduct').value,
                    document.getElementById('property-damage').value,
                    document.getElementById('months-insured').value
                )} className='form-btn'>SUBMIT</button>
            </div>
            <p style={{ textAlign: "center", color: "red", fontWeight: 600 }}>{props.errorText}</p>

        </div>
    )
}

export default FormPageFour