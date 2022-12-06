import React, { useEffect, useState } from 'react'
import styles from '../navbarLogin/navbarLogin.module.css';
import logo from '../../../assets/logo.svg';
import icMail from '../../../assets/mail.svg'
import icNotif from '../../../assets/notification.svg'
import icAva from '../../../assets/avatar.png'

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const NavbarLogin = () => {
  const navigate = useNavigate();

  const { data: user } = useSelector((state) => state.user.user)
  // console.log(user.user_id)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const id = user.user_id
  // console.log(id)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://dead-rose-train.cyclic.app/v1/user/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false)
  }, []);


const handleLogout = () => {
  localStorage.clear();
  navigate('/login');
};
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className={`${styles.containerNav} container-fluid ms-5`}>
          <Link to='' className={`${styles.containerLogo} navbar-brand`} >
            <img className={styles.logo} src={logo} alt="Bootstrap" width="30" height="24" />
          </Link>
          <Link to='/' className="navbar-brand">
            <h2 className={styles.logoText}>Ankasa</h2>
          </Link>
          <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className={`${styles.input} d-flex `} role="search">
              <input className={`${styles.search} form-control `} type="search" placeholder="Where you want to go?" aria-label="Search" />
            </form>
            <ul className="navbar-nav me-5 ms-5 mb-2 mb-lg-0 ">
              <li className={`${styles.menuText} nav-item  `}>
                <Link to='/search' className="btn fw-bold"  >
                  Find Ticket
                </Link>
              </li>
              <li className={`${styles.menuText} nav-item`}>
                <Link to='/mybooking' className="nav-link active" >
                  My Booking
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <button className={`px-2 ${styles.btnNotif}`}>
                    <img src={icNotif} alt="icBell" />
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chat">
                  <button className={`px-2 mx-3 ${styles.btnNotif}`}>
                    <img src={icMail} alt="icMail" />
                  </button>
                </Link>
              </li>
              <div className="dropdown">
                <button
                  className={`p-1 mt-1 ${styles.btnAva}`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <img src={data.ava_url} alt="icCart" className={styles.cstmAva} style={{height: '30px', borderRadius:"100%"}} />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/profile"}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleLogout}
                      className="dropdown-item"
                      to={"/login"}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarLogin