import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet, Navigate } from 'react-router-dom';

import Login from '../views/auth/login';
import Register from '../views/auth/register';
import ForgotPassword from '../views/auth/forgotPassword';

import Home from '../views/home/index';
import Search from '../views/search';
import BookingDetail from '../views/bookingDetail';
import FlightDetail from '../views/flightDetail';

import MyBooking from '../views/myBooking';
import Profile from '../views/profile';
import UpdateProfile from '../views/updateProfile';
import NotFound from '../views/NotFound';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const PrivateRoute = ({children}) => {
  const token = localStorage.getItem('token');
  if(token) {
    return <Outlet/>
  } else {
    alert("you cannot access this page, please login first")
    return <Navigate to='/' />
  }
}

const AuthRoute = ({children}) => {
  const token = localStorage.getItem('token');
  if(!token) {
      return <Outlet/>
  } else {
      alert('logout for access this page');
      return <Navigate to='/mybooking' />;
  }
}
const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/login" element={<AuthRoute />} >
            <Route index element={<Login/>}/>
          </Route>
          <Route path="/register" element={<AuthRoute />} >
            <Route index element={<Register/>}/>
          </Route>
          <Route path="/forgotpassword" element={<AuthRoute />} >
            <Route index element={<ForgotPassword/>}/>
          </Route>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<PrivateRoute />} >
            <Route index element={<Search/>}/>
          </Route>
          <Route path="/booking/:id" element={<PrivateRoute />} >
            <Route index element={<BookingDetail/>}/>
          </Route>
          <Route path="/flight/:id" element={<PrivateRoute />} >
            <Route index element={<FlightDetail/>}/>
          </Route>
          <Route path="/profile" element={<PrivateRoute />} >
            <Route index element={<Profile/>}/>
          </Route>
          <Route path="/mybooking" element={<PrivateRoute />} >
            <Route index element={<MyBooking/>}/>
          </Route>
          <Route path="/updateProfile/user/:id" element={<PrivateRoute />} >
            <Route index element={<UpdateProfile/>}/>
          </Route>
          
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
