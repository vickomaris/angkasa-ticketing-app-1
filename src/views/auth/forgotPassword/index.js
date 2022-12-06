import React from 'react';
import styles from '../auth.module.css';
import logo from '../../../assets/logo.svg';
import banner from '../../../assets/banner.png'


const ForgotPassword = () => {
  return (
    <>
    <section className='login'>
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-md-7">
            <div className={`d-flex flex-row ${styles.leftside}`}>
              <img src={banner} alt="" />
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="rightside p-5">
              <div className="d-flex flex-row">
                <img src={logo} alt="" className='me-5' />
                <p className={styles.titleLogo}>
                  Angkasa
                </p>
              </div>
              <div className="d-flex flex-row my-5">
                <p className={styles.title}>
                  Forgot Password
                </p>
              </div>
              <div className="d-flex flex-column col-md-10">
                <div class="form-floating mb-3">
                  <input type="email"className={`form-control  ${styles.formInput}`} id="floatingPassword" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                
                <div class="d-grid gap-2 col-12 mx-auto my-4 ">
                  <button class={styles.btnlogin} type="button">Send</button>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center mb-5'>
                  <p className={styles.forgot}> You’ll get message soon on your email </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </>
  );
};

export default ForgotPassword;
