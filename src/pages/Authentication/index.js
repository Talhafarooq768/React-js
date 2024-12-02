import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Login from "./Login"
import Register from "./Register"
// import ForgetPassword from "./ForgetPassword"

const index = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                {/* <Route path='forget-assword' element={<ForgetPassword />} /> */}
            </Routes>
        </>
    )
}

export default index
