import React from 'react';
import styles from '../navbar/navbar.module.css';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className={`${styles.containerNav} container-fluid ms-5`}>
          <Link to='' className={`${styles.containerLogo} navbar-brand`} >
            <img className={styles.logo} src={logo} alt="Bootstrap" width="30" height="24" />
          </Link>
          <Link to='' className="navbar-brand">
            <h2 className={styles.logoText}>Ankasa</h2>
          </Link>
          <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className={`${styles.input} d-flex `} role="search">
              <input className={`${styles.search} form-control `} type="search" placeholder="Where you want to go?" aria-label="Search" />
            </form>
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0 ">
              <li className={`${styles.menuText} nav-item  `}>
                <Link to='' className=" nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                  Find Ticket
                </Link>
              </li>
              <li className={`${styles.menuText} nav-item`}>
                <Link to='' className="nav-link active" >
                  My Booking
                </Link>
              </li>
            </ul>
            <form className={`${styles.Button} d-flex `} role="search">
              <Link to='/login' className={`${styles.signUp} btn`} type="submit">
                Login
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
