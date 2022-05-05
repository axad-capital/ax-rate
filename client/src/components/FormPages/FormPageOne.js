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
                    <button type='submit' onClick={() => props.next(document.getElementById('zipcode').value, document.getElementById('homeowner').value, document.getElementById('insured').value)}>Next</button>
                </div>
                <p style={{ textAlign: "center", color: "red", fontWeight: 600 }}>{props.errorText}</p>
            </div>
        </div>
    )
}

export default FormPageOne