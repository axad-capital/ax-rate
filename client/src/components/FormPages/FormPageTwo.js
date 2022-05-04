import React from 'react'

const FormPageTwo = (props) => {
    return (
        <div>
            <div className="form-extra-info">
                <h5 className='long-form-steps'>Step 2 of 3</h5>
                <div className='previous-container'>
                    <button id='previous' onClick={props.last}>Start Over</button>
                </div>
                <br />
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

                <br />
                <label htmlFor="state">State / Province / Region</label>
                <br />
                <input type="text" name="state" id="state" placeholder='State / Province / Region' />
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

            </div>
            <div className="form-page-two-btn">
                <button onClick={props.next}>Next</button>

            </div>
        </div>
    )
}

export default FormPageTwo