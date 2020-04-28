import React from 'react'
import './Location.sass'
import Title from '../Title/Title'
import Footer from '../Footer/Footer'

const Location = () => {
    return (
        <div className='Location'>
            <Title title='Location' />
            <p>We are located in every corner of the United States</p>
            <div className="left-side">
                <div className="box">
                    <p className="place">Orlando</p>
                    <p className="address">123 Main Street Orlando, Fl. 9876</p>
                    <p className="tel">(123) 456-7890</p>
                </div>
                <div className="box">
                    <p className="place">Orlando</p>
                    <p className="address">123 Main Street Orlando, Fl. 9876</p>
                    <p className="tel">(123) 456-7890</p>
                </div>
                <div className="box">
                    <p className="place">Orlando</p>
                    <p className="address">123 Main Street Orlando, Fl. 9876</p>
                    <p className="tel">(123) 456-7890</p>
                </div>
            </div>
            <div className="right-side">
                <img src="" alt=""/>
            </div>
            <Footer />
        </div>
    )
}

export default Location
