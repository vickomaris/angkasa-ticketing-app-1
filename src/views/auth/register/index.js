import React, { useState } from "react";
import styles from "../auth.module.css";
import logo from "../../../assets/logo.svg";
import banner from "../../../assets/banner.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { register } from "../../../redux/actions/user.action";

const Register = () => {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  console.log(registerForm.username);
  console.log(registerForm.email);
  console.log(registerForm.phone);
  console.log(registerForm.password);

  const handleInput = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(...registerForm)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      registerForm.username === "" ||
      registerForm.email === "" ||
      registerForm.phone === "" ||
      registerForm.password === ""
    ) {
      alert("Data tidak boleh kosong");
    } else if (registerForm.password.length >= 5) {
      const handleSuccess = (data) => {
        console.log(data);
        console.log(data.data.code);
        if (data.data.code === 500) {
          alert("email atau phone sudah terdaftar");
        } else {
          alert("register sukses");
          navigate("/login");
        }
      };
      console.log(registerForm);
      register(registerForm, handleSuccess);
    } else {
      alert("password minimal 5 charackter");
    }
  };

  return (
    <>
      <section className="login">
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
                  <img src={logo} alt="" className="me-5" />
                  <p className={styles.titleLogo}>Angkasa</p>
                </div>
                <div className="d-flex flex-row mb-5">
                  <p className={styles.title}>Register</p>
                </div>
                <div className="d-flex flex-column col-md-10">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className={`form-control  ${styles.formInput}`}
                        id="username"
                        name="username"
                        onChange={handleInput}
                      />
                      <label htmlFor="username">Full Name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className={`form-control  ${styles.formInput}`}
                        id="email"
                        name="email"
                        onChange={handleInput}
                      />
                      <label htmlFor="email">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className={`form-control  ${styles.formInput}`}
                        id="phone"
                        name="phone"
                        onChange={handleInput}
                      />
                      <label htmlFor="phone">Phone</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className={`form-control  ${styles.formInput}`}
                        id="password"
                        name="password"
                        onChange={handleInput}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="d-grid gap-2 col-12 mx-auto my-4 ">
                      <button className={styles.btnlogin} type="submit">
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div className="d-flex flex-row  mb-5">
                    <input
                      className="form-check-input mt-2 me-3"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                    <p className={styles.forgot}>
                      {" "}
                      Accept terms and condition{" "}
                    </p>
                  </div>
                  <hr />
                  <p className="text-center">Already have an account?</p>
                  <button className={styles.btnsignin} type="button">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
