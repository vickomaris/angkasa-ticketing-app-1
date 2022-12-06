import React from "react";
import styles from "./flightDetail.module.css";
import Navbar from "../../components/module/navbar";
import Footer from "../../components/module/footer";
import garuda from "../../assets/airline.png";
import icFlight from "../../assets/flight.svg";
import ceklis from "../../assets/icCentang.svg";
import bnr from "../../assets/pesawat.svg";
import icWarning from "../../assets/warning.svg";
import icDot from "../../assets/icDot.svg";
import icDown from "../../assets/btnback.svg";

// import v from '../../assets/btnback.png';
import { Link, useParams, useNavigate } from "react-router-dom";
import NavbarLogin from "../../components/module/navbarLogin";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

const FlightDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idUser = useSelector((state) => state.user.user.data.user_id);
  const dataUser = useSelector((state) => state.user.user.data);
  const [dataFlight, setDataFligth] = useState({});
  const [bookingform, setBookingForm] = useState({
    psg_title: "",
    psg_name: "",
    psg_nationality: "",
    travel_insurance: true,
  });
  // console.log("data", dataUser.user_id)
  console.log(bookingform.psg_name);
  console.log(bookingform.psg_nationality);
  console.log(bookingform.travel_insurance);
  const handleInput = (e) => {
    setBookingForm({
      ...bookingform,
      [e.target.name]: e.target.value,
    });
    // console.log(bookingform)
  };
  // console.log("data", dataFlight);
  useEffect(() => {
    console.log(id)
    axios
      .get(`https://dead-rose-train.cyclic.app/v1/admin/flight/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setDataFligth(response.data.data);
        // console.log(setDataFligth)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  let jamDatang = "06.00";
  if (dataFlight.arrival_time === 0) {
    jamDatang = "00.00";
  } else if (dataFlight.arrival_time === 1) {
    jamDatang = "06.00";
  } else if (dataFlight.arrival_time === 2) {
    jamDatang = "12.00";
  } else if (dataFlight.arrival_time === 3) {
    jamDatang = "18.00";
  } else {
    jamDatang = "notFound";
  }
  let JamSampe = "08.00";
  if (dataFlight.departure_time === 0) {
    JamSampe = "02.00";
  } else if (dataFlight.departure_time === 1) {
    JamSampe = "08.00";
  } else if (dataFlight.departure_time === 2) {
    JamSampe = "14.00";
  } else if (dataFlight.departure_time === 3) {
    JamSampe = "20.00";
  } else {
    JamSampe = "notFound";
  }
  let harga = 0;
  if (bookingform.travel_insurance === false) {
    harga = dataFlight.price;
  } else {
    harga = dataFlight.price + (2 / 100) * dataFlight.price;
  }
  const handleSubmit = (e) => {
    if (
      bookingform.psg_title !== "" ||
      bookingform.psg_name !== "" ||
      bookingform.psg_nationality !== ""
    ) {
      e.preventDefault();
      let total = dataFlight.price;
      if (bookingform.travel_insurance === false) {
        total = dataFlight.price;
      } else {
        total = dataFlight.price + (2 / 100) * dataFlight.price;
      }
      console.log(total);
      const body = {
        user_id: dataUser.user_id,
        flight_id: dataFlight.flight_id,
        airline_id: dataFlight.airline_id,
        psg_title: bookingform.psg_title,
        psg_name: bookingform.psg_name,
        psg_nationality: bookingform.psg_nationality,
        travel_insurance: bookingform.travel_insurance,
        payment_status: false,
        total,
      };
      axios
        .post(`https://dead-rose-train.cyclic.app/v1/booking/`, body)
        .then((response) => {
          console.log(response.data);
          alert(`ticket with id ${body.flight_id} has booked successfully`)
          return navigate("/mybooking");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("mohon di lengkapi data");
    }
  };
  return (
    <>
      {localStorage.token ? <NavbarLogin /> : <Navbar />}
      <section>
        <div className="row">
          <div className={`${styles.benner} col-12`}>
            <img className={styles.bnr} src={bnr} alt="" />
            <h2 className={styles.textPerson}>Contact Person Details</h2>
            <h3 className={styles.fd}>Flight Detail</h3>
            <h4 className={styles.vd}>View Detail</h4>
          </div>
        </div>
      </section>
      <section className={styles.main}>
        <div className="container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className={`col-md-8 p-4 ${styles.leftside}`}>
                <div className={`p-4 ${styles.CPdetail}`}>
                  <div className="d-flex flex-column">
                    <p className={styles.textLabelCP}>Full Name</p>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className={`form-control ${styles.inputStyle}`}
                        defaultValue={dataUser.username}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        disabled
                      />
                    </div>
                    <p className={styles.textLabelCP}>Email</p>
                    <div className="input-group mb-4">
                      <input
                        type="email"
                        className={`form-control ${styles.inputStyle}`}
                        defaultValue={dataUser.email}
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        disabled
                      />
                    </div>
                    <p className={styles.textLabelCP}>Phone Number</p>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className={`form-control ${styles.inputStyle}`}
                        defaultValue={dataUser.phone}
                        aria-label="Phone"
                        aria-describedby="basic-addon1"
                        disabled
                      />
                    </div>
                    <div
                      className={`d-flex flex-row p-3 mt-3 ${styles.reminder}`}
                    >
                      <img src={icWarning} alt="warning" />
                      <div className="ms-3">
                        Make sure the customer data is correct.
                      </div>
                    </div>
                  </div>
                </div>
                <p className={`mt-5 ${styles.textTitle}`}>Passenger Details</p>
                <div className={`p-4 ${styles.passengerDetail}`}>
                  <div
                    className={`d-flex flex-row p-3 mb-4 ${styles.reminderPassenger}`}
                  >
                    <div className={styles.textPassenger}>
                      Passenger : 1 Adult
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <p className={styles.textLabelCP}>Title</p>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className={`form-control ${styles.inputStyle}`}
                        placeholder="Mr"
                        aria-label="Mr"
                        aria-describedby="basic-addon1"
                        name="psg_title"
                        id="psg_title"
                        onChange={handleInput}
                      />
                    </div>
                    <p className={styles.textLabelCP}>Full Name</p>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className={`form-control ${styles.inputStyle}`}
                        placeholder="FullName"
                        aria-label="FullName"
                        aria-describedby="basic-addon1"
                        name="psg_name"
                        id="psg_name"
                        onChange={handleInput}
                      />
                    </div>
                    <p className={styles.textLabelCP}>Nationallity</p>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className={`form-control ${styles.inputStyle}`}
                        placeholder="Nationallity"
                        aria-label="Nationallity"
                        aria-describedby="basic-addon1"
                        name="psg_nationality"
                        id="psg_nationality"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <p className={`mt-5 ${styles.textTitle}`}>Passenger Details</p>
                <div className={`p-4 ${styles.passengerDetail}`}>
                  <div className="d-flex flex-row">
                    <input
                      className="form-check-input mt-1 me-3"
                      type="checkbox"
                      value="false"
                      aria-label="Checkbox for following text input"
                      name="travel_insurance"
                      id="travel_insurance"
                      checked
                      disabled
                      onClick={handleInput}
                    />
                    <p className={styles.textInsurance}>Travel Insurance</p>
                    <p className={`ms-auto ${styles.textPriceinsurance}`}>
                      $ 2,00
                    </p>{" "}
                    <p className={`mt-1 ${styles.textPax}`}>/pax</p>
                  </div>
                  <hr />
                  <p className={styles.textCompensation}>
                    Get travel compensation up to $ 10.000,00
                  </p>
                </div>
                <div className="d-grid gap-2 col-6 mt-5 mx-auto">
                  <button className={`btn ${styles.cstmButton}`} type="submit">
                    Proceed to Payment
                  </button>
                </div>
              </div>
              <div className={`col-md-4 p-4 ${styles.rightside}`}>
                <div className="d-flex flex-row ">
                  <img src={dataFlight.icon_airlines} alt="airlines_icon" style={{height:"50px",width:"150px"}}/>
                  <p className={`ms-5 ${styles.textGaruda}`}>
                    {dataFlight.name}
                  </p>
                </div>
                <div className="d-flex flex-row mt-4">
                  <div className={styles.textCity}>
                    {dataFlight.arrival_city} ({dataFlight.arrival_country})
                  </div>
                  <img src={icFlight} alt="flight" className="mx-4" />
                  <div className={styles.textCity}>
                    {dataFlight.departure_city} ({dataFlight.departure_country})
                  </div>
                </div>
                <div className="d-flex flex-row mt-4">
                  <div className={styles.textTime}>Sunday, 15 August 2020</div>
                  <img src={icDot} alt="dot" className="mx-3" />
                  <div className={styles.textTime}>
                    {jamDatang} - {JamSampe}
                  </div>
                </div>
                <div className="d-flex flex-row mt-4">
                  <img src={ceklis} alt="dot" className="mx-3" />
                  <div className={styles.textOptional}>Refundable</div>
                </div>
                <div className="d-flex flex-row mt-3">
                  <img src={ceklis} alt="dot" className="mx-3" />
                  <div className={styles.textOptional}>can reschedule</div>
                </div>
                <hr />
                <div className="d-flex flex-row mt-3">
                  <div className={styles.textTotal}>Total Payment</div>
                  <div className={`ms-auto me-3 ${styles.textPrice}`}>
                    {harga}
                  </div>
                  <img src={icDown} alt="down" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FlightDetail;
