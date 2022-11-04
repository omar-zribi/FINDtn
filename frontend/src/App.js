import React from 'react';
// import './App.css'
import { useSelector } from 'react-redux';

import PublicNavBar from './components/public interface/public navbar/PublicNavBar';
import PrivateNavBar from './components/private interface/private navbar/PrivateNavBar';
import AdminNavBar from './components/admin interface/admin navbar/AdminNavBar';
import FullApp from './components/FullApp';
import Footer from './components/footer/Footer';

function App() {
  const user = useSelector((state) => state.userReducer.user);
  const token = localStorage.getItem('token');
  return (
    <>
    {
      ((user) && (token) && (user.role === 'user') && (user.isActive === true))?(<PrivateNavBar />):
      ((user) && (token) && (user.role === 'admin') && (user.isActive === true))?(<AdminNavBar />):
      (<PublicNavBar />)
    }
      <FullApp/>
      <Footer />
    </>
  );
}

export default App;
