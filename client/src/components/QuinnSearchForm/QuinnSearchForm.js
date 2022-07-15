import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import { useLocation } from 'react-router-dom';

const QuinnSearchForm = () => {

    const [blankHandler, setBlankHandler] = useState('')

    const location = useLocation();

    function getVarId() {
        var url = window.location.href;
        var match = url.match(/source=(\d+)/)
        if (match) {
            var varId = match[1];
            return varId
        }
        return 21
    }

    function handleFormSub(url) {

        if (document.getElementById('state').value === '' || document.getElementById('zip').value === '' || document.getElementById('home-owner').value === '' || document.getElementById('insured').value === '' || document.getElementById('age').value === '') {
            setBlankHandler('All fields required')
            return
        }

        if (parseInt(document.getElementById('age').value) <= 0) {
            setBlankHandler('Please enter a valid age')
            return
        }

        // let userInput = {
        //   "state": document.getElementById('state').value,
        //   "pubcampaignid": "6364",
        //   "vertical": "2",
        //   "age": document.getElementById('age').value,
        //   "homeowner": document.getElementById('home-owner').value,
        //   "currentlyinsured": document.getElementById('insured').value
        // }

        // let formData = {
        //     zip: document.getElementById('zip').value,
        //     id: uuidv4()
        // }

        // localStorage.setItem('ax-rate-data', JSON.stringify(formData))

        let userInput = {
            "tracking": {
                "content_type": "xml/json",
                "ni_ad_client": 690264,
                "ni_zc": document.getElementById('zip').value,
                "ip": '',
                "ua": navigator.userAgent,
                "ni_var1": getVarId(),
                "ni_ref": "https://www.ratemagician.com/thank-you/soc"
            },
            "contact": {
                "zip": document.getElementById('zip').value,
                "homeowner": document.getElementById('home-owner').value,
            },
            "current_insurance": {
                "currently_insured": document.getElementById('insured').value,
            }
        }


        fetch("https://www.nextinsure.com/listingdisplay/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInput)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('axrateQsearch', JSON.stringify(data))
                if (url.pathname.split('/')[1] === 'goog') {
                    window.location.href = '/thanks/goog'
                } else if (url.pathname.split('/')[1] === 'fb') {
                    window.location.href = '/thanks/fb'
                } else {
                    window.location.href = '/thanks'
                }
            })
    }

    return (
        <div>
            <div className="short-form">

                <label htmlFor="zip">Enter Your Zipcode</label>
                <br />
                <input type="number" name="zip" id="zip" placeholder='Zipcode' />
                <br />

                <label htmlFor="state"><strong>Please choose the current state you're in</strong></label>
                <select id='state' className='form-input' name="state">
                    <option disabled selected value=''> -- Select An Option -- </option>
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

                <label htmlFor="home-owner"><strong>Are you a homeowner?</strong></label>
                <select id='home-owner' className='form-input' name="home-owner">
                    <option disabled selected value=''> -- Select An Option -- </option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>

                <label htmlFor="insured"><strong>Are you a insured?</strong></label>
                <select id='insured' className='form-input' name="insured">
                    <option disabled selected value=''> -- Select An Option -- </option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>

                <label htmlFor="age"><strong>Enter your age</strong></label>
                <input id='age' className='form-input' type="number" placeholder='Enter your age' />
                <br />
                <button onClick={() => handleFormSub(location)}>Submit</button>
                <p style={{ color: 'red', textAlign: 'center' }} >{blankHandler}</p>

                {location.pathname.split('/')[1] === 'dsp-prop-pop' ? <p style={{ textAlign: 'center' }}>Need A Quote Quick? Contact Our Licensed Insurance Agents At <a style={{ textDecoration: 'none', fontSize: '20px' }} href='tel:18447992424'>1(844)799-2424</a></p> :
                    location.pathname.split('/')[1] === 'goog' ? <p style={{ textAlign: 'center' }}>Need A Quote Quick? Contact Our Licensed Insurance Agents At <a style={{ textDecoration: 'none', fontSize: '20px' }} href='tel:18777110738'>1(877)711-0738</a></p> :
                        location.pathname.split('/')[1] === 'dsp' ? <p style={{ textAlign: 'center' }}>Need A Quote Quick? Contact Our Licensed Insurance Agents At <a style={{ textDecoration: 'none', fontSize: '20px' }} href='tel:18664140150'>1(866)414-0150</a></p> :
                            location.pathname.split('/')[1] === 'fb' ? <p style={{ textAlign: 'center' }}>Need A Quote Quick? Contact Our Licensed Insurance Agents At <a style={{ textDecoration: 'none', fontSize: '20px' }} href='tel:18775573335'>1(877)557-3335</a></p> :
                                <p style={{ textAlign: 'center' }}>Need A Quote Quick? Contact Our Licensed Insurance Agents At <a style={{ textDecoration: 'none', fontSize: '20px' }} href='tel:8884312082'>(888) 431-2082</a></p>}

                <p className="consent">By clicking “Yes” I provide my signature expressly consenting to contact from Allied Insurance Partners, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated dialing system or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy. California Residents</p>
            </div>
        </div>
    )
}

export default QuinnSearchForm