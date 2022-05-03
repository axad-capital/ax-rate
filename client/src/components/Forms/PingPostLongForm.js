import React from 'react'

const PingPostLongForm = () => {
    return (
        <div>
            <div id='form' className="form-container">
                <div className='form-title-container'>
                    <h1 className='form-title'>Free Auto Insurance Quotes</h1>
                    <br />
                    <h3 className='form-sub-title'>Easily Find The Right Auto Policy For You</h3>
                    <h3 className="form-sub-title">Get The Best Auto Policy</h3>
                </div>
                <div className="form-info-container">
                    <label htmlFor="first">First Name</label>
                    <br />
                    <input type="text" name="first" id="first" placeholder='First Name' />
                    <br />
                    <br />
                    <label htmlFor="last">Last Name</label>
                    <br />
                    <input type="text" name="last" id="last" placeholder='Last Name' />
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" name="email" id="email" placeholder='Email' />
                    <br />
                    <br />
                    <label htmlFor="phone">Phone Number</label>
                    <br />
                    <input type="tel" name="phone" id="phone" placeholder='Phone' />
                    <br />
                    <br />
                    <label htmlFor="stree-address">Street Address</label>
                    <br />
                    <input type="text" name="stree-address" id="stree-address" placeholder='Street Address' />
                    <br />
                    <br />
                    <label htmlFor="city">City</label>
                    <br />
                    <input type="text" name="city" id="city" placeholder='City' />
                    <br />
                    <br />
                    <label htmlFor="state">State / Province / Region</label>
                    <br />
                    <input type="text" name="state" id="state" placeholder='State / Province / Region' />
                    <br />
                    <br />
                    <label htmlFor="zipcode">Zipcode</label>
                    <br />
                    <input type="text" name="zipcode" id="zipcode" placeholder='Zipcode' />
                    <br />
                    <br />
                    <div className="form-extra-info">
                        <label htmlFor="homeowner">Are you A Homeowner?</label>
                        <br />
                        <select name="homeowner" id="homeowner">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="insured">Are you Insured?</label>
                        <br />
                        <select name="insured" id="insured">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="insure-begining">Current Insurance Begining Date</label>
                        <br />
                        <input type="date" name="insure-begining" id="insure-begining" />
                        <br />
                        <br />

                        <label htmlFor="insure-ending">Current Insurance Ending Date</label>
                        <br />
                        <input type="date" name="insure-ending" id="insure-ending" />
                        <br />
                        <br />

                        <label htmlFor="requested-coverage">Requested Insurance Coverage</label>
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
                        <br />

                        <label htmlFor="gender">Gender</label>
                        <br />
                        <select name="gender" id="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="birth">Date Of Birth</label>
                        <br />
                        <input type="date" name="birth" id="birth" />
                        <br />
                        <br />

                        <label htmlFor="marital">Marital Status</label>
                        <br />
                        <select name="marital" id="marital">
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Divorced">Divored</option>
                            <option value="Domestic Partner">Domestic Partner</option>
                            <option value="Separated">Separated</option>
                            <option value="Civil Union">Civil Union</option>
                        </select>
                        <br />
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

                        <p className='consent'>By clicking “Yes” I provide my signature expressly consenting to contact from GetMyAutoInsured.com, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy</p>
                        <br />

                        <button className='form-btn'>Submit</button>
                    </div>
                </div>
            </div>
            <br />

        </div>
    )
}

export default PingPostLongForm