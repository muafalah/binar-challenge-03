import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cars } from '../Pages/Cars/Cars'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { SignIn } from '../Pages/SignIn/SignIn'

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cars" element={<Cars page={"list cars"} />} />
        <Route path="/cars/add" element={<Cars page={"add new cars"} />} />
        <Route path="/cars/edit" element={<Cars page={"edit cars"} />} />
        <Route path="/cars/success" element={<Cars page={"success cars"} />} />
        <Route path="/cars/delete" element={<Cars page={"delete cars"} />} />
      </Routes>
    </div>
  )
}
