import React, { useState } from 'react';
import styles from '../auth.module.css';
import logo from '../../../assets/logo.svg';
import googleW from '../../../assets/google.png';
import facebookW from '../../../assets/fb.png';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/user.action';


const Login = () => {
  const navigate = useNavigate()
  const dispacth = useDispatch()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      alert("Data tidak boleh kosong");
    } else {
      dispacth(login(form, navigate))
    }
  }
  
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
                    Login
                  </p>
                </div>
                <div className="d-flex flex-column col-md-10">
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input type="email" className={`form-control  ${styles.formInput}`} id="floatingPassword" placeholder="name@example.com" name="email" onChange={handleInput} />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className='form-floating'>
                      <input type="password" className={`form-control  ${styles.formInput}`} id="floatingPassword" placeholder="Password" name="password" onChange={handleInput} />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-grid gap-2 col-12 mx-auto my-4 ">
                      <button className={styles.btnlogin} type="submit">Sign In</button>
                    </div>
                  </form>
                  <div className='d-flex flex-column align-items-center justify-content-center mb-5'>
                    <p className={styles.forgot}> Did you forgot your password? </p>
                    <p className={styles.reset}> Tap here for reset </p>
                  </div>
                  <hr />
                  <p className={styles.orSign}> or<Link to='/register'> sign up</Link> </p>
                  <div className={`d-flex flex-row justify-content-center ${styles.setIcon}`}>
                    <img src={googleW} className={`me-3 ${styles.googleIcon}`} alt="google icon" />
                    <img className={styles.fbIcon} src={facebookW} alt="facebook icon" />
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

export default Login;
