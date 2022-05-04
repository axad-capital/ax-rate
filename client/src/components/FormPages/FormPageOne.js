import React from 'react'

const FormPageOne = (props) => {
    return (
        <div>
            <div className="form-extra-info">
            <h5 className='long-form-steps'>Step 1 of 3</h5>
                <label htmlFor="zipcode">Zipcode</label>
                <br />
                <input type="text" name="zipcode" id="zipcode" placeholder='Zipcode' />
                <br />
                <br />
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
                <div className="form-page-one-btn">
                    <button onClick={props.next}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default FormPageOne