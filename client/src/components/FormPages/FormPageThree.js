import React from 'react'

const FormPageThree = (props) => {
    return (
        <div>
            <div className="form-extra-info">
                <h5 className='long-form-steps'>Step 3 of 4</h5>
                <div className='previous-container'>
                    <button id='previous' onClick={props.last}>Start Over</button>
                </div>
                <br />
                
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

                <p className='consent'>By clicking “Yes” I provide my signature expressly consenting to contact from axrate.com, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy</p>
                <br />

                {/* <button onClick={props.last}>Previous</button> */}
                <button onClick={() => props.next(
                    document.getElementById('age').value,
                    document.getElementById('license-status').value,
                    document.getElementById('credit').value,
                    document.getElementById('vehicle-year').value,
                    document.getElementById('vehicle-make').value,
                    document.getElementById('vehicle-model').value,
                    document.getElementById('vehicle-vin').value,
                    document.getElementById('mileage').value
                )} className='form-btn'>Next</button>
            </div>
            <p style={{ textAlign: "center", color: "red", fontWeight: 600 }}>{props.errorText}</p>
        </div>
    )
}

export default FormPageThree