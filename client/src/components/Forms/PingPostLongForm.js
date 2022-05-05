import React, { useState } from 'react'
import FormPageOne from '../FormPages/FormPageOne'
import FormPageTwo from '../FormPages/FormPageTwo'
import FormPageThree from '../FormPages/FormPageThree'
import LongFormImg from './long-form-img.png'

const PingPostLongForm = () => {

    const [showForm, setShowForm] = useState(1)

    let storage = JSON.parse(localStorage.getItem('axrate-long-form-data'))
    if (storage === null) {
        storage = []
    }

    function nextForm1(zip, homeowner, insured) {
        setShowForm(showForm + 1)
        storage.push(zip, homeowner, insured)
        localStorage.setItem('axrate-long-form-data', JSON.stringify(storage))
    }

    function nextForm2(first, last, email, phone, address, state, gender, birth, married) {
        setShowForm(showForm + 1)
        storage.push(first, last, email, phone, address, state, gender, birth, married)
        localStorage.setItem('axrate-long-form-data', JSON.stringify(storage))
    }

    function previousForm() {
        setShowForm(1)
        localStorage.clear()
    }

    function longFormSubmit(licenseAge, licenseStatus, credit, vehicleYear, make, model, VIN, mileage) {
        storage.push(licenseAge, licenseStatus, credit, vehicleYear, make, model, VIN, mileage)
        localStorage.setItem('axrate-long-form-data', JSON.stringify(storage))
        sendToPipeDream()
    }

    function sendToPipeDream() {

        let storage = JSON.parse(localStorage.getItem('axrate-long-form-data'))

        // fetch('https://api.ipify.org/?format=json')
        //     .then(result => result.json())
        //     .then(ipData => {

                let userData = {
                    apiId: "1D39A9E077D948B1B578206F918FF5C0",
                    apiPassword: "a61268163",
                    // productId: 187,
                    // price: 0,
                    tcpa: "yes",
                    tcpaLanguage: "By clicking “Yes” I provide my signature expressly consenting to contact from axrate.com, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy",
                    // userIp: ipData.ip,
                    currentlyInsured: storage[2],
                    firstName: storage[3],
                    lastName: storage[4],
                    zip: storage[0],
                    email: storage[5],
                    phone: storage[6],
                    address: storage[7],
                    state: storage[8],
                    driver1rFirstName: storage[3],
                    driver1LastName: storage[4],
                    driver1Gender: storage[9],
                    driver1Dob: storage[10],
                    driver1MaritalStatus: storage[11],
                    driver1AgedLicensed: storage[12],
                    driver1LicenseStatus: storage[13],
                    creditRating: storage[14],
                    vehicle1Year: storage[15],
                    vehicle1Make: storage[16],
                    vehicle1Model: storage[17],
                    vehicle1Vin: storage[18],
                    vehicle1AnnualMileage: storage[19]
                }

                fetch('https://en7v7smokhh637s.m.pipedream.net/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                console.log(userData)

            // })

    }

    return (
        <div>
            <div id='form' className="form-container">
                <div className='form-title-container'>
                    <h1 className='form-title'>Free Auto Insurance Quotes</h1>
                    <br />
                    <h3 className='form-sub-title'>Easily Find The Right Auto Policy For You</h3>
                    <h3 className="form-sub-title">Get The Best Auto Policy</h3>
                </div>
                <br />
                <div className='long-form-container'>
                    <div className='long-form-img-container'>
                        <img className='long-form-img' src={LongFormImg} alt="form-img" />
                    </div>
                    <div className='long-form-form-container'>
                        {showForm === 3 ? <FormPageThree longFormSubmit={longFormSubmit} last={previousForm} /> : showForm === 2 ? <FormPageTwo next={nextForm2} last={previousForm} /> : <FormPageOne next={nextForm1} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PingPostLongForm