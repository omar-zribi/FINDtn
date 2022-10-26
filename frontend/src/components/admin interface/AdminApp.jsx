import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../footer/Footer'
import { Clock } from './clock/Clock'
import NavBarAdmin from './clock/NavBar Admin/NavBarAdmin'
import JobOffer from './job offer/JobOffer'


const AdminApp = () => {
  return (
    <div>
      <NavBarAdmin />
     <Router>
       <Routes>
         {/* <Route path="/" element={<PrivateHome />} /> */}
         {/* <Route path="/contact" element={<PrivateContact />} /> */}
       </Routes>
     </Router>
     <Footer />
   </div>
  )
}
export default AdminApp
