import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../footer/Footer'

import PublicAbout from './public about/PublicAbout'
import PublicContact from './public contact/PublicContact'
import PublicHome from './public home/PublicHome'
import PublicNavBar from './public navbar/PublicNavBar'
import PublicServises from './public services/PublicServises'
import User from './user/User'


const PublicApp = () => {
  return (
    <div>
    <PublicNavBar />
     <Router>
       <Routes>
         <Route path="/" element={<PublicHome />} />
         <Route path="/about" element={<PublicAbout />} />
         <Route path="/servises" element={<PublicServises />} />
         <Route path="/contact" element={<PublicContact />} />
         <Route path="/user" element={<User />} />
       </Routes>
     </Router>
     <Footer />
   </div>
  )
}
export default PublicApp
