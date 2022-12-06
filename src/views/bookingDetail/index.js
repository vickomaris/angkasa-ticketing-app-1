import React, { useEffect, useState } from 'react'
import styles from "./bookingDetail.module.css";
import AirlineGaruda from '../../assets/airline.png'
import Navbar from '../../components/module/navbar';
import Footer from '../../components/module/footer';
import Option from '../../assets/iconOption.svg'
import Qrcode from '../../assets/QRCode1.svg'
import iconflight from '../../assets/flight.svg'
import NavbarLogin from '../../components/module/navbarLogin';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const BookingDetail = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://dead-rose-train.cyclic.app/v1/admin/booking/${id}`)
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
      {localStorage.token ? <NavbarLogin/> : <Navbar/>}
      <main className='bodycontent'>
        <div className={`container-fluid ${styles.ticket}`}>
          <div className='row'>
            <div className='col-md-10'>
              <div className={styles.bookingPass}>
                <div className={`d-flex flex-row ${styles.title}`}>
                  <p className={`col-md-11 ${styles.settitle}`}> Booking Pass</p>
                  <img src={Option} />
                </div>
                <div className="d-flex flex-row">
                  <div className={`col-md-7 ${styles.ticketleft}`}>
                    <div className='d-flex flex-row'>
                      <div className={`col-md-4 ${styles.iconAirline}`}>
                        <img src={data.logo_url} />
                      </div>
                      <div className='col-md-2 mt-3'>
                        <h4>{data.arrival_city} ({data.arrival_country})</h4>
                      </div>
                      <div className='col-md-2 mt-3'>
                        <img src={iconflight} className="mx-4" />
                      </div>
                      <div className='col-md-2 mt-3'>
                        <h4>{data.departure_city} ({data.departure_country})</h4>
                      </div>
                    </div>
                    <div className='d-flex flex-row'>
                      <div className='col-md-6 mt-5'>
                        <p className={styles.code}>Code</p>
                        <p className={styles.setcode}>AB-221</p>
                      </div>
                      <div className='col-md-6 mt-5'>
                        <p className={styles.class}>class</p>
                        <p className={styles.setclass}>Economy</p>
                      </div>
                    </div>
                    <div className='d-flex flex-row'>
                      <div className='col-md-6 mt-2'>
                        <p className={styles.terminal}>Terminal</p>
                        <p className={styles.setterminal}>{data.gate}</p>
                      </div>
                      <div className='col-md-6 mt-2'>
                        <p className={styles.gate}>Gate</p>
                        <p className={styles.setgate}>{data.terminal}</p>
                      </div>
                    </div>
                    <div className='d-flex flex-row'>
                      <div className='col-md-8 mt-2'>
                        <p className={styles.depature}>Depature</p>
                        <p className={styles.setdepature}>Monday, 20 July ‘20 - 12:33</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className={`col-md-4 ${styles.ticketright}`}>
                    <img src={Qrcode} />
                  </div>
                </div>
                {/* <div className={`d-flex flex-row ${styles.tickeright}`}>
                  <img src={AirlineGaruda}/>
                </div> */}

              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default BookingDetail