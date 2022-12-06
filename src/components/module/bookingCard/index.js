import React, { useEffect, useState } from 'react'
import styles from "./bookingCard.module.css"
import iconflight from '../../../assets/flight.svg'
import iconarrowbtm from '../../../assets/btnback.svg'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const BookingCard = () => {
  const navigate = useNavigate()
  const { data: user } = useSelector((state) => state.user.user);

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const user_id = user.user_id

  useEffect(() => {
    console.log(user)
    setLoading(true)
    axios
      .get(`https://dead-rose-train.cyclic.app/v1/admin/booking/user/${user_id}`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false)
  }, [])

  return (
    <>
      {/* {JSON.stringify(data)} */}
      {
        data.map((item) => (
          <div className={styles.CardBooking}>
            <div className='d-flex flex-row align-items-center'>
              <p className={styles.date}>Monday, 20 July ‘20 - 12:33 </p>
            </div>
            <div className='d-flex flex-row'>
              <div className='col-md-auto '>
                <h3>{item.arrival_city} ({item.arrival_country})</h3>
              </div>
              <div className={`col-md-1 ${styles.iconsFlight}`}>
                <img src={iconflight} className='mx-4' />
              </div>
              <div className='col-md-auto '>
                <h3>{item.departure_city} ({item.departure_country})</h3>
              </div>
            </div>
            <div className='col-md-4 '>
              <p className={styles.codePlane}>{item.name}</p>
            </div>
            <hr className='p-0' />
            <div className='d-flex flex-row align-items-center '>
              <div className='col-md-2'>
                <p className={styles.status}>Status </p>
              </div>
              <div className={`col-md-3 ${styles.statuspayment}`}>
                {(item.payment_status === true) ? 
                (<p className={styles.setStatus}> Succes </p>) : (<p className={styles.setStatus2}> Waiting for payment </p>)  }
              
              </div>
              <div className={`col-md-3 ${styles.detailcustom}`}>
               <Link to={`/booking/${item.booking_id}`}> <p className={styles.setDetail}> View Details </p></Link> 
              </div>
              {/* <div className={`col-md-3 ${styles.arrowbtnn}`}>
                <img src={iconarrowbtm} className={`mb-2 ${styles.arrowbtm}`} />
              </div> */}
            </div>
          </div>
        ))
      }

    </>
  )
}

export default BookingCard