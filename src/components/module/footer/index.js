import React from 'react';
import styles from './footer.module.css';
import logo from '../../../assets/logo.svg';
import appstore from '../../../assets/appstore.svg';
import googlestore from '../../../assets/googleplay.svg';
import twitter from '../../../assets/twitter.svg';
import youtube from '../../../assets/youtube.svg';
import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row ">
          <div className="col-4">
            <div className={`${styles.container1} container-fluid`}>
              <img className={styles.logo1} src={logo} />
              <h2 className={styles.ankasa1}>Ankasa</h2>
              <div className={styles.text1}>
                <p>
                  Find your Flight and explore the <br /> world with us. We will take care of the rest{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 ">
            <div className={styles.container2}>
              <h4>Features</h4>
              <div className={styles.containerImg}>
                <ul className={styles.list}>
                  <li className={styles.listLi}>
                    <Link to=''>Find Ticket</Link>
                  </li>
                  <li className={styles.listLi}>
                    <Link to='' className={styles.textA}>My Booking</Link>
                  </li>
                  <li className={styles.listLi}>
                    <Link to='' className={styles.textB}>Chat</Link>
                  </li>
                  <li className={styles.listLi}>
                    <Link to className={styles.textC}>Notification</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={styles.container3}>
              <h4>Download Angkasa app</h4>
              <div className={styles.containerImg}>
                <img className={styles.img1} src={appstore} />
                <img className={styles.img2} src={googlestore} />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={styles.container4}>
              <h4>Follow Us</h4>
              <img className={styles.imgOne} src={facebook} />
              <img className={styles.imgTwo} src={youtube} />
              <img className={styles.imgTwo} src={twitter} />
              <img className={styles.imgTwo} src={instagram} />
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-6 ">
            <p className={styles.p1}>© Insan Cita Tech. All Rights Reserved.</p>
          </div>
          <div className="col-6">
            <p className={styles.p2}>Jakarta Indonesia</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
