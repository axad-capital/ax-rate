import React, { useState } from 'react'
import FormPageOne from '../FormPages/FormPageOne'
import FormPageTwo from '../FormPages/FormPageTwo'
import FormPageThree from '../FormPages/FormPageThree'
import FormPageFour from '../FormPages/FormPageFour'
import LongFormImg from './long-form-img.png'
import { v4 as uuidv4 } from 'uuid';

const PingPostLongForm = () => {

    const [showForm, setShowForm] = useState(1)
    const [formError, setFormError] = useState("")

    let storage = JSON.parse(localStorage.getItem('axrate-long-form-data'))
    if (storage === null) {
        storage = []
    }

    function getAge(birth) {
        var today = new Date();
        var birthDate = new Date(birth);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function nextForm1(zip, homeowner, insured) {

        if (zip === "") {
            setFormError("Missing fields.")
            return
        }

        setFormError("")
        setShowForm(showForm + 1)
        storage.push(zip, homeowner, insured)
        localStorage.setItem('axrate-long-form-data', JSON.stringify(storage))
    }

    function nextForm2(first, last, email, phone, address, state, gender, birth, married) {
        let age = getAge(birth)

        if (age < 16) {
            setFormError("You must be 16 years of age or older.")
            return
        }

        if (first === "" || last === "" || email === "" || phone === "" || address === "" || state === "" || isNaN(age)) {
            setFormError("Missing fields.")
            return
        }

        setFormError("")
        setShowForm(showForm + 1)
        storage.push(first, last, email, phone, address, state, gender, birth, married)
        localStorage.setItem('axrate-long-form-data', JSON.stringify(storage))

    }

    function previousForm() {
        setFormError("")
        setShowForm(1)
        localStorage.clear()
    }


    function nextForm3(licenseAge, licenseStatus, credit, vehicleYear, make, model, VIN, mileage) {

        if (vehicleYear.length !== 4) {
            setFormError("Year must be valid")
            return
        }

        if (licenseAge === "" || vehicleYear === "" || make === "" || model === "" || VIN === "" || mileage === "") {
            setFormError("Missing fields.")
            return
        }

        if (VIN.length !== 17) {
            setFormError("Invalid VIN")
            return
        }

        function getDailyMileage(mileage) {
            return parseInt(mileage / 365)
        }

        setFormError("")
        setShowForm(showForm + 1)
        storage.push(licenseAge, licenseStatus, credit, vehicleYear, make, model, VIN, mileage, getDailyMileage(mileage))
        localStorage.setItem('axrate-long-form-data', JSON.stringify(storage))
    }


    function longFormSubmit(monthsAddress, currentInsureExpiration, ticketDate, violationDate, accidentDate, claimDate, claimPay, collisionDeduct, propertyDamage, monthsInsured, currentInsuranceCompany) {

        setFormError("")
        storage.push(monthsAddress, currentInsureExpiration, ticketDate, violationDate, accidentDate, claimDate, claimPay, collisionDeduct, propertyDamage, monthsInsured, currentInsuranceCompany)
        localStorage.setItem('axrate-long-form-data', JSON.stringify(storage))
        sendToPipeDream()
    }

    function sendToPipeDream() {

        let storage = JSON.parse(localStorage.getItem('axrate-long-form-data'))

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
            vehicle1AnnualMileage: storage[19],
            vehicle1Submodel: storage[17],
            vehicle1DailyMileage: storage[20],
            monthsAtAddress: storage[21],
            currentInsuranceExpirationDate: storage[22],
            driver1Ticket1Date: storage[23],
            driver1Violation1Date: storage[24],
            driver1Accident1Date: storage[25],
            driver1Claim1Date: storage[26],
            driver1Claim1PaidAmount: [27],
            requestedVehicleCollisionDeductibles: storage[28],
            requestedPropertyDamage: storage[29],
            continuouslyInsuredPeriod: storage[30],
            driver1LicenseState: storage[8],
            currentInsuranceCompany: storage[31]
        }

        fetch('https://en7v7smokhh637s.m.pipedream.net/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        console.log(userData)

        let formData = {
            zip: storage[0],
            // birth: document.getElementById('birth').value,
            // coverage: document.getElementById('coverage').value,
            // homeOwner: document.getElementById('homeowner').value,
            // insured: document.getElementById('insured').value,
            id: uuidv4()
        }

        localStorage.setItem('ax-rate-data', JSON.stringify(formData))
        window.location.href = '/thanks'

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
                        {showForm === 4 ? <FormPageFour errorText={formError} longFormSubmit={longFormSubmit} last={previousForm} /> : showForm === 3 ? <FormPageThree errorText={formError} next={nextForm3} last={previousForm} /> : showForm === 2 ? <FormPageTwo errorText={formError} next={nextForm2} last={previousForm} /> : <FormPageOne next={nextForm1} errorText={formError} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PingPostLongForm