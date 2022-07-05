import React from 'react'

const ThanksFb = () => {
    // return (
    //     <div>
    //         <div style={{ textAlign: "center", margin: "50px" }}>
    //             <h1>Thank you!</h1>
    //             <h3>Your Form Has Been Submitted Successfully</h3>
    //         </div>
    //         <br />
    //     </div>
    // )
    let storage = JSON.parse(localStorage.getItem('transparentlyAutoEmail'))
    console.log(storage.result)

    if (storage === null) {
        return (
            <div>
                <h1>No ads to show at this time</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1 style={{ width: '80%', margin: '20px auto', textAlign: 'center' }}>Compare Insurance Quotes in Your Area. Click on 2 or more Insurance Partners below to compare quotes and maximize your savings.</h1>
                <br />
                {storage.result.map(ad => (
                    <div className='transparently' onClick={() => window.location.href = ad.clickUrl} key={ad.adCreativeId}>
                        <img style={{ width: '200px' }} src={ad.logoUrl} alt="ad logo" />
                        <div>
                            <h2>{ad.brandName}</h2>
                            <p>{ad.title}</p>
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}

export default ThanksFb