import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from 'components/Header'

import Home from './Home'
import Footer from "components/Footer"
import Company from './About/Company'
const Frontend = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='/about' element={<Company />} />

            </Routes>
            <Footer />
        </>
    )
}

export default Frontend
