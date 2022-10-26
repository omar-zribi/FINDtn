import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../footer/Footer'
import AddJob from '../job/add job/AddJob'
import AllJob from '../job/all job/AllJob'
import PrivateContact from './private contact/PrivateContact'
import PrivateHome from './private home/PrivateHome'
import PrivateNavBar from './private navbar/PrivateNavBar'
import ProfileFemale from './profile/ProfileFemale'
import ProfileMale from './profile/ProfileMale'

const PrivateApp = () => {
  return (
    <div>
    <PrivateNavBar />
     <Router>
       <Routes>
         <Route path="/" element={<PrivateHome />} />
         <Route path="/contact" element={<PrivateContact />} />
         <Route path="/profile1" element={<ProfileFemale />} />
         <Route path="/profile2" element={<ProfileMale />} />
         <Route path="/alljob" element={<AllJob />} />
         
       </Routes>
     </Router>
     <Footer />
   </div>
  )
}
export default PrivateApp
