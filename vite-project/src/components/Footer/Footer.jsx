import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerDiv_1'>
            <div>
                <h4>HELP</h4>
                <p>FAQS</p>
                <p>SHIPPING</p>
                <p>RETURNS</p>
                <p>SIZE GUIDES</p>
                <p>SHIRT MULTIBUY</p>
                <p>CONTACT US</p>
                <p>CALL US +44 20 8174 4100</p>
            </div>
            <div>
                <h4>LEGAL</h4>
                <p>TERM AND CONDITIONS</p>
                <p>PRIVACY POLICE</p>
                <p>COOKIE POLICE</p>
                <p>ETHICAL TRADING POLICY</p>
                <p>MODERN SLAVERY STATEMENT</p>
            </div>
            <div>
                <h4>MORE INFO</h4>
                <p>ABOUT US</p>
                <p>CARRER</p>
                <p>DOING THING ANDDOING THINGS PROPERLY</p>
            </div>
            <div></div>
        </div>
        <div className='footerDiv-2'>
            <hr style={{width:"1000px"}} />
        </div>

        <div className='footerDiv-3'>
            <img className='footerImg' src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/en/v1677240641580/../images/icons/svg-icons/padlock_blue.svg" alt="" />
            <p>Shopping is secure with Charles Tyrwhitt.</p>
        </div>
    </div>
  )
}
