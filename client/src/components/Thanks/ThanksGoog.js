import React from 'react'

const ThanksGoog = () => {
    // return (
    //     <div>
    //         <div style={{ textAlign: "center", margin: "50px" }}>
    //             <h1>Thank you!</h1>
    //             <h3>Your Form Has Been Submitted Successfully</h3>
    //         </div>
    //         <br />
    //     </div>
    // )

    // // Transparently

    // let storage = JSON.parse(localStorage.getItem('transparentlyAutoEmail'))
    // console.log(storage.result)

    // if (storage === null) {
    //     return (
    //         <div>
    //             <h1>No ads to show at this time</h1>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1 style={{ width: '80%', margin: '20px auto', textAlign: 'center' }}>Compare Insurance Quotes in Your Area. Click on 2 or more Insurance Partners below to compare quotes and maximize your savings.</h1>
    //             <br />
    //             {storage.result.map(ad => (
    //                 <div className='transparently' onClick={() => window.location.href = ad.clickUrl} key={ad.adCreativeId}>
    //                     <img style={{ width: '200px' }} src={ad.logoUrl} alt="ad logo" />
    //                     <div>
    //                         <h2>{ad.brandName}</h2>
    //                         <p>{ad.title}</p>
    //                     </div>

    //                 </div>
    //             ))}
    //         </div>
    //     )
    // }

    return (
        <div>
          <h1 style={{ textAlign: 'center' }}>Get A Free Auto Insurance Quote From The Companies Below</h1>
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <a href="https://insuranceratesguru.com/?utm_source=native&utm_medium=native&placement=2a5bcb2a-b236-4da7-a595-ed1207a1c898&sub1=38774aad169a4107bda08ee6ac8c6dcd&sub2=4088"><img style={{ width: "100%", maxWidth: '350px' }} src='/images/IR-GuruLOGO.png' alt="insurance Rates Guru" /></a>
            <br />
            <br />
            <a href="https://americainsurancequotes.com/?utm_source=native&utm_medium=native&placement=9cb381fd-5ceb-4c95-ac87-69d71af1d8b4&sub1=71fb64029c9d40a9b05b2155dea1ac23&sub2=4088"><img style={{ width: "100%", maxWidth: '350px' }} src='/images/AmericaINsQuoteslogo.png' alt="American" /></a>
            <br />
            <br />
            <a href="https://fasterinsuranceprices.com/?utm_source=native&utm_medium=native&placement=e1824271-a2b2-4f02-a5e6-b140444d1006&sub1=a5c52cb767284f06803a6056d2f847a6&sub2=4088"><img style={{ width: "100%", maxWidth: '350px' }} src='/images/FasterINslogo.png' alt="faster" /></a>
            <br />
            <br />
            <a href="https://insurancepriceguide.com/?utm_source=native&utm_medium=native&placement=30ad0aa9-bdab-4bfc-92cf-c6e183772c5a&sub1=42bee899dd6a4acda9ce27e8a924aa68&sub2=4088"><img style={{ width: "100%", maxWidth: '350px' }} src='/images/PriceGuideLogo.png' alt="insurance" /></a>
            <br />
            <br />
            <a href="https://insurancesaverusa.com/?utm_source=native&utm_medium=native&placement=1e04ad94-d353-485a-ba38-272b1de6655a&sub1=b197a5d9f9a64ecc8e1913514e24d3fa&sub2=4088"><img style={{ width: "100%", maxWidth: '350px' }} src='/images/INs-saverusalogo.png' alt="In" /></a>
            <br />
          </div>
        </div>
      )
}

export default ThanksGoog