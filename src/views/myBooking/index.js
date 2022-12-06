import React from 'react'
import styles from "./myBooking.module.css";
import BookingCard from '../../components/module/bookingCard';
import ProfileCard from '../../components/module/profileCard';
import Navbar from '../../components/module/navbar';
import NavbarLogin from '../../components/module/navbarLogin';
import Footer from '../../components/module/footer'


const MyBooking = () => {
  
  return (
    <>
      {localStorage.token ? <NavbarLogin /> : <Navbar />}
      <main className='bodycontent'>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-4'>
               <div className={`mx-3 ${styles.leftside}`}>
                  <ProfileCard/>
                </div>
            </div>
           <div className='col-md-8'>
              <div className={`d-flex flex-column ${styles.bookinghistory}`}>
                <p className={styles.title}> MY BOOKING </p> 
               <div className='d-flex flex-row'>
                  <p className={`col-md-10 ${styles.subtitle}`}> MY BOOKING </p> 
                  <p className={styles.history}> Order History </p> 
                </div>
              </div>         
              <div className='rightside'>
                <BookingCard/>
              </div>
           </div>          
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default MyBooking