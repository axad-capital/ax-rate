import React, { useState } from 'react'
import FormPageOne from '../FormPages/FormPageOne'
import FormPageTwo from '../FormPages/FormPageTwo'
import FormPageThree from '../FormPages/FormPageThree'

const PingPostLongForm = () => {

    const [showForm, setShowForm] = useState(1)

    function nextForm() {
        setShowForm(showForm + 1)
    }

    function previousForm() {
        setShowForm(showForm - 1)
    }

    function longFormSubmit() {
        
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
                {showForm === 3 ? <FormPageThree longFormSubmit= {longFormSubmit} last={previousForm}/> : showForm === 2 ? <FormPageTwo next={nextForm} last={previousForm}/> : <FormPageOne next={nextForm}/>}
            </div>
        </div>
    )
}

export default PingPostLongForm