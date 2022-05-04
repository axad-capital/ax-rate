import React from 'react'

const FormPageThree = (props) => {
    return (
        <div>
            <div className="form-extra-info">
                <h5 className='long-form-steps'>Step 3 of 3</h5>
                <div className='previous-container'>
                    <button id='previous' onClick={props.last}>Start Over</button>
                </div>
                <br />
                {/* <label htmlFor="requested-coverage">Requested Insurance Coverage</label>
                <br />
                <select name="requested-coverage" id="requested-coverage">
                    <option value="MINIMUM ($15K / $30K / $5K)">MINIMUM ($15K / $30K / $5K)</option>
                    <option value="BASIC ($50K / $100K / $50K) ">BASIC ($50K / $100K / $50K) </option>
                    <option value="STANARD ($100K / $300K / $100K)">STANARD ($100K / $300K / $100K)</option>
                    <option value="SUPERIOR ($250K / $500K / $100K)">SUPERIOR ($250K / $500K / $100K)</option>
                </select>
                <br />
                <br />

                <label htmlFor="comprehensive">Requested Deductible For Comprehensive Coverage</label>
                <br />
                <select name="comprehensive" id="comprehensive">
                    <option value="no-coverage">NO COVERAGE</option>
                    <option value="D0">D0</option>
                    <option value="D50">D50</option>
                    <option value="D100">D100</option>
                    <option value="D250">D250</option>
                    <option value="D500">D500</option>
                    <option value="D1000">D1000</option>
                    <option value="D2500">D2500</option>
                </select>
                <br />
                <br />

                <label htmlFor="collision">Requested Deductible For Collision Coverage</label>
                <br />
                <select name="collision" id="collision">
                    <option value="no-coverage">NO COVERAGE</option>
                    <option value="D0">D0</option>
                    <option value="D50">D50</option>
                    <option value="D100">D100</option>
                    <option value="D250">D250</option>
                    <option value="D500">D500</option>
                    <option value="D1000">D1000</option>
                    <option value="D2500">D2500</option>
                </select>
                <br />
                <br /> */}

                <label htmlFor="age">Age When First Licensed</label>
                <br />
                <input type="number" name="age" id="age" placeholder='Age' />
                <br />
                <br />

                <label htmlFor="license-status">License Status</label>
                <br />
                <select name="license-status" id="license-status">
                    <option value="Active">Active</option>
                    <option value="Expired">Expired</option>
                    <option value="Foreign">Foreign</option>
                    <option value="Permit">Permit</option>
                    <option value="Restricted">Restricted</option>
                    <option value="Suspened">Suspended</option>
                    <option value="Revoked">Revoked</option>
                    <option value="Temporary">Temporary</option>
                </select>
                <br />
                <br />

                <label htmlFor="credit">Credit Score</label>
                <br />
                <select name="credit" id="credit">
                    <option value="Superior">Superior</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Average">Average</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                    <option value="Unsure">Unsure</option>
                </select>
                <br />
                <br />

                <label htmlFor="vehicle-year">Vehicle Year</label>
                <br />
                <input type="number" name="vehicle-year" id="vehicle-year" placeholder='Vehicle Year' />
                <br />
                <br />

                <label htmlFor="vehicle-make">Vehicle Make</label>
                <br />
                <input type="text" name="vehicle-make" id="vehicle-make" placeholder='Vehicle Make' />
                <br />
                <br />

                <label htmlFor="vehicle-model">Vehicle Model</label>
                <br />
                <input type="text" name="vehicle-model" id="vehicle-model" placeholder='Vehicle Model' />
                <br />
                <br />

                <label htmlFor="vehicle-vin">VIN</label>
                <br />
                <input type="text" name="vehicle-vin" id="vehicle-vin" placeholder='VIN' />
                <br />
                <br />

                <label htmlFor="mileage">Annual Mileage</label>
                <br />
                <input type="number" name="mileage" id="mileage" placeholder='Annual Mileage' />
                <br />
                <br />

                <p className='consent'>By clicking “Yes” I provide my signature expressly consenting to contact from GetMyAutoInsured.com, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy</p>
                <br />

                {/* <button onClick={props.last}>Previous</button> */}
                <button onClick={props.longFormSubmit} className='form-btn'>Submit</button>
            </div>
        </div>
    )
}

export default FormPageThree