import React, { useEffect, useState } from "react";
import styles from "./flightCard.module.css";
import AirlineGaruda from "../../../assets/airline.png";
import iconflight from "../../../assets/flight.svg";
import iconluggage from "../../../assets/lunggage.svg";
import iconlunch from "../../../assets/lunch.svg";
import iconwifi from "../../../assets/wifi.svg";
import iconarrowbtm from "../../../assets/btnback.svg";
import { Link } from "react-router-dom";

const FlightCard = (dataFlights) => {
  const [isLoadCard, setLoadCard] = useState(false);
  const [dataCard, setDataCard] = useState([]);
  useEffect(() => {
    setLoadCard(true);
    setDataCard(dataFlights);
    setLoadCard(false);
  }, []);

  // const checkData = () => {
  //   console.log();
  // };
  return (
    <>
      {isLoadCard ? (
        <>..loading</>
      ) : (
        dataFlights.dataFlights.length < 1 ? (<>data not found</>) :
        dataFlights.dataFlights.map((item, index) => (
          <div key={index} className={styles.Cardflights}>
            <div className="d-flex flex-row align-items-center mb-3">
              <img src={item.logo_url} className="me-5" alt={item.maskapai} style={{width:"100px",height:"100px"}}/>
              <p className="mt-3"> {item.maskapai}</p>
              {/* <button onClick={checkData}>trigger console</button> */}
            </div>
            <div className="d-flex flex-row">
              <div className="col-md-1 ">
                <p>{item.departure_city} <span>({item.departure_country})</span></p>
                <p>
                  {
                    item.departure_time === 0 ? (<>03:00</>) : 
                    item.departure_time === 1 ? (<>06:30</>) :
                    item.departure_time === 2 ? (<>13:30</>) :
                    item.departure_time === 3 ? (<>19:30</>) :
                    <></>
                  }
                </p>
              </div>
              <div className="col-md-1">
                <img src={iconflight} className="ms-3 mt-3 iconplane" />
              </div>
              <div className="col-md-1 ">
                <p>{item.arrival_city} <span>({item.arrivalm_country})</span></p>
                <p>
                {
                    item.departure_time === 0 ? (<>05:00</>) : 
                    item.departure_time === 1 ? (<>09:30</>) :
                    item.departure_time === 2 ? (<>17:30</>) :
                    item.departure_time === 3 ? (<>22:30</>) :
                    <></>
                  }
                </p>
              </div>
              <div className="col-md-3 mx-3">
                <p className={styles.hours}>3 hours 11 minutes</p>
                <p className={styles.transit}>
                  {
                  
                      item.transit === 0 ? (<>(direct)</>) : 
                      item.transit === 1 ? (<>(Transit)</>) :
                      item.transit === 0 ? (<>(Transit 2 +)</>) :
                      <></>
                  }
                </p>
              </div>
              <div className={`col-md-2 col-3 ${styles.seticon}`}>
                <img src={iconluggage} className="mx-1 mt-4" />
                <img src={iconlunch} className="mx-1 mt-4" />
                <img src={iconwifi} className="mx-1 mt-4" />
              </div>
              <div className="col-md-2">
                <p className={`mt-4 ${styles.setPrice}`}>
                  {" "}
                  <span style={{ color: "#2395FF" }}> Rp.{item.price}</span> /pax
                </p>
              </div>
              <div className="col-md-2">
                <Link to={`/flight/${item.flight_id}`} className={`btn btn-primary mt-4 ${styles.btncostum}`}>
                  SELECT
                </Link>
              </div>
            </div>
            <div className="d-flex flex-row">
              <p className={`me-3 ${styles.view}`}>View Detail</p>
              <img
                src={iconarrowbtm}
                className={`mb-3 ${styles.arrowbtm}`}
              ></img>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default FlightCard;
