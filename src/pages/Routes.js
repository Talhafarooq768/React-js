import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Frontend from './Frontend'
import Authentication from './Authentication'
import Dashboard from './Dashboard'
const index = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={< Frontend />} />
                <Route path='/authentication/*' element={< Authentication />} />
                <Route path='/dashboard/*' element={< Dashboard />} />


            </Routes>
        </>
    )
}
export default index
