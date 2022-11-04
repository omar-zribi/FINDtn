import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import PublicHome from './public interface/public home/PublicHome';
import PrivateHome from './private interface/private home/PrivateHome';
import AdminHome from './admin interface/admin home/AdminHome';

import PublicAbout from './public interface/public about/PublicAbout';

import PublicServises from './public interface/public services/PublicServises';

import PrivateProfile from './private interface/profile/PrivateProfile';
import User from './public interface/user/User';
import AdminProfile from './admin interface/profile/AdminProfile';

import ActivationPage from './public interface/user/ActivationPage';
import PrivateContact from './private interface/private contact/PrivateContact';
import PublicContact from './public interface/public contact/PublicContact';

import AdminContact from './admin interface/admin contact/AdminContact';

const FullApp = () => {
    const user = useSelector((state) => state.userReducer.user);
  const token = localStorage.getItem('token');    
  return (
    <Router>
        <Routes>
          <Route path="/"
            element={
            ((user) && (token) && (user.role === 'user') && (user.isActive === true))?(<PrivateHome />):
            ((user) && (token) && (user.role === 'admin') && (user.isActive === true))?(<AdminHome />):
            (<PublicHome />)
          } />
          <Route path="/:userName" 
          element={
            ((user) && (token) && (user.role === 'user') && (user.isActive === true))?(<PrivateProfile />):
            ((user) && (token) && (user.role === 'admin') && (user.isActive === true))?(<AdminProfile />):
            (<ActivationPage />)
          } />
          
          <Route path={`/user`} element={<User />}/>
          <Route path="/about" element={<PublicAbout />} />
          <Route path="/servises" element={<PublicServises />} />
          <Route path="/contact"
            element={
            ((user) && (token) && (user.role === 'user') && (user.isActive === true))?(<PrivateContact />):
            ((user) && (token) && (user.role === 'admin') && (user.isActive === true))?(<AdminContact />):
            (<PublicContact />)
            } />
        </Routes>
      </Router>
  )
}

export default FullApp
