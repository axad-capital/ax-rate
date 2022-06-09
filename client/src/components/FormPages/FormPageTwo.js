import React from 'react'

const FormPageTwo = (props) => {
    return (
        <div>
            <div className="form-extra-info">
                <h5 className='long-form-steps'>Step 2 of 4</h5>
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
                <input type="text" name="street-address" id="street-address" placeholder='Street Address' />
                <br />
                <br />

                <br />
                <label htmlFor="state">State</label>
                <br />
                <select name="state" id="state" placeholder='State'>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
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

            </div>
            <div className="form-page-two-btn">
                <button onClick={() => props.next(
                    document.getElementById('first').value,
                    document.getElementById('last').value,
                    document.getElementById('email').value,
                    document.getElementById('phone').value,
                    document.getElementById('street-address').value,
                    document.getElementById('state').value,
                    document.getElementById('gender').value,
                    document.getElementById('birth').value,
                    document.getElementById('marital').value
                )}>
                    Next
                </button>
                <br />
                <p style={{ textAlign: "center", color: "red", fontWeight: 600 }}>{props.errorText}</p>
            </div>
        </div>
    )
}

export default FormPageTwo