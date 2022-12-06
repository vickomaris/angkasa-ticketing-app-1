import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import FlightCard from "../../components/module/flightCard";
import Navbar from "../../components/module/navbar";
import Footer from "../../components/module/footer";
import plane from "../../assets/logowhite.svg";
import iconarrowbtm from "../../assets/btnback.svg";
import SortArrow from "../../assets/sortarrow.svg";
import ArrowWhite from "../../assets/arrowwhite.svg";
import dotWhite from "../../assets/dotwhite.svg";
import NavbarLogin from "../../components/module/navbarLogin";
// action redux
import { listFlightWithFilter } from "../../redux/actions/flight.action";
import { useCallback } from "react";

const Search = () => {
  const [loading, setLoading] = useState(false);
  // set data flight after search
  const [dataFlights, setDataFLights] = useState([]);
  const [searchValues, setSearchVales] = useState({
    arrival_city: "jakarta",
    departure_city: "surabaya",
    transit: 0,
    facilities: 0,
    departure_time: 1,
    arrival_time: 1,
    sortby: "asc",
  });

  // useEffect(() => {
  //   setLoading(true);
  //   console.log(searchValues);
  //   const handleSuccess = async (data) => {
  //     console.log(data.data.data);
  //     await setDataFLights(data.data.data);
  //     setLoading(false);
  //   };
  //   const data = {};
  //   listFlightWithFilter(data, handleSuccess);
  // }, []);

  /** inisialisation trigger for toggle transit */
  let triggerTransit = null;

  const toggleCheckedTransitDirect = () => {
    // 0 is direct
    triggerTransit = 0;
    if (triggerTransit === 0) {
      setSearchVales({ ...searchValues, transit: 0 });
    }
  };
  const toggleCheckedTransitTransit = () => {
    // 1 is transit
    triggerTransit = 1;
    if (triggerTransit === 1) {
      setSearchVales({ ...searchValues, transit: 1 });
    }
  };
  const toggleCheckedTransitTwoPlus = () => {
    // 2 is transit 2 +
    triggerTransit = 2;
    if (triggerTransit === 2) {
      setSearchVales({ ...searchValues, transit: 2 });
    }
  };
  /** end of transit toggle */

  /** initiation trigger for toggle facilities */
  let triggerFacilities = null;

  const toggleCheckedFacilitiesLuggage = () => {
    // 0 is luggage
    triggerFacilities = 0;
    if (triggerFacilities === 0) {
      setSearchVales({ ...searchValues, facilities: 0 });
    }
  };

  const toggleCheckedFacilitiesInFlightMeal = () => {
    // 1 is in flight meal
    triggerFacilities = 1;
    if (triggerFacilities === 1) {
      setSearchVales({ ...searchValues, facilities: 1 });
    }
  };

  const toggleCheckedFacilitiesWifi = () => {
    // 2 is wifi
    triggerFacilities = 2;
    if (triggerFacilities === 2) {
      setSearchVales({ ...searchValues, facilities: 2 });
    }
  };
  /** end of facilities toggle */

  /** initiation trigger for departure_time */
  let triggerDeptTime = null;

  // for user selected 00:00 - 06:00
  const toggleCheckedDeptTime1 = () => {
    triggerDeptTime = 0;
    if (triggerDeptTime === 0) {
      setSearchVales({ ...searchValues, departure_time: 0 });
    }
  };

  // for user selected 06:00 - 12:00
  const toggleCheckedDeptTime2 = () => {
    triggerDeptTime = 1;
    if (triggerDeptTime === 1) {
      setSearchVales({ ...searchValues, departure_time: 1 });
    }
  };

  // for user selected 12:00 - 18:00
  const toggleCheckedDeptTime3 = () => {
    triggerDeptTime = 2;
    if (triggerDeptTime === 2) {
      setSearchVales({ ...searchValues, departure_time: 2 });
    }
  };

  // for user selected 18:00 - 24:00
  const toggleCheckedDeptTime4 = () => {
    triggerDeptTime = 3;
    if (triggerDeptTime === 3) {
      setSearchVales({ ...searchValues, departure_time: 3 });
    }
  };
  /** end of departure time toggle */
  let triggerArrivedTime = null;

  const toggleCheckedArrivedTime1 = () => {
    triggerArrivedTime = 0;
    if (triggerArrivedTime === 0) {
      setSearchVales({ ...searchValues, arrival_time: 0 });
    }
  };

  const toggleCheckedArrivedTime2 = () => {
    triggerArrivedTime = 1;
    if (triggerArrivedTime === 1) {
      setSearchVales({ ...searchValues, arrival_time: 1 });
    }
  };

  const toggleCheckedArrivedTime3 = () => {
    triggerArrivedTime = 2;
    if (triggerArrivedTime === 2) {
      setSearchVales({ ...searchValues, arrival_time: 2 });
    }
  };

  const toggleCheckedArrivedTime4 = () => {
    triggerArrivedTime = 3;
    if (triggerArrivedTime === 3) {
      setSearchVales({ ...searchValues, arrival_time: 3 });
    }
  };
  /** initiation toggle arrived time*/

  /** handle change form  search city*/
  const handleChange = (e) => {
    setSearchVales({
      ...searchValues,
      [e.target.name]: e.target.value,
    });
  };
  /** end of handle change form search */

  /** process search */
  // source : https://stackoverflow.com/questions/55647287/how-to-send-request-on-click-react-hooks-way
  const processSearch = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    // console.log(searchValues);
    const data = {
      arrival_city: searchValues.arrival_city,
      departure_city: searchValues.departure_city,
      transit: searchValues.transit,
      facilities: searchValues.facilities,
      departure_time: searchValues.departure_time,
      arrival_time: searchValues.arrival_time,
      sortby: searchValues.sortby,
    };
    console.log(data);
    const handleSuccess = (data) => {
      console.log("data search", data.data.data);
      setDataFLights(data.data.data)
    };
    listFlightWithFilter(data, handleSuccess);

    setLoading(false);
  }, [searchValues]);

  return (
    <>
      {localStorage.token ? <NavbarLogin /> : <Navbar />}
      <section className="searchresult">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.searchBlue}>
                <div className="d-flex flex-column flex-md-row">
                  <img src={plane} className={styles.whiteplane} />
                  <div className="col-md-10">
                    <div className="d-flex flex-row mt-5">
                      <p className={`ms-2 ${styles.pFromto}`}>From</p>
                      <p className={styles.pFromto}> To </p>
                    </div>
                    <form>
                      <div className={`d-flex flex-row ${styles.setInput}`}>
                        <input
                          type="text"
                          className={`ms-2 mb-3 ${styles.inputFormto}`}
                          id="address"
                          placeholder="Jakarta(IDN)"
                          name="arrival_city"
                          onChange={handleChange}
                        />
                        <img src={ArrowWhite} className="mx-3 mb-3" />
                        <input
                          type="text"
                          className={`mb-3 ${styles.inputToForm}`}
                          id="address"
                          placeholder="Surabaya(IDN)"
                          name="departure_city"
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          className={styles.btncostum}
                          onClick={processSearch}
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    <div className="d-flex flex-row">
                      <p className={`ms-2 ${styles.pDay}`}>
                        Monday, 20 July 20
                      </p>
                      <img src={dotWhite} className="mx-2 mb-3" />
                      <p className={styles.pPassanger}> 6 Passenger</p>
                      <img src={dotWhite} className="mx-2 mb-3" />
                      <p className={styles.pEconomy}> Economy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="titlefilter">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="d-flex flex-row">
                <p className={`col-md-10 mt-3 ${styles.secFilter}`}>Filter</p>
                <p className={`mt-4 ${styles.secReset}`}> Reset </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex flex-row">
                <p className={`col-md-3 mt-3 ${styles.secTicket}`}>
                  Select Ticket
                </p>
                <p className={`col-md-8 my-4 ${styles.secFound}`}>
                  ({dataFlights.length} Ticket Found)
                </p>
                <p className={`my-4 me-2 ${styles.secSort}`}>(Sort By)</p>
                <select
                      className="form-select"
                      style={{ backgroundColor: "#FFF" }}
                      aria-label="Default select example"
                      name="sortby"
                      onChange={handleChange}
                    >
                      <option></option>
                      <option value="asc">ASC</option>
                      <option value="desc">DESC</option>
                    </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bodycontent">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={`d-flex flex-column ${styles.leftside}`}>
                <div className="d-flex flex-row">
                  <button
                    className={`col-md-10 ${styles.titleFiltercollapse}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Transit"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    {" "}
                    Transit{" "}
                  </button>
                  <button
                    className={`ms-3 ${styles.btnarrow}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Transit"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <img
                      src={iconarrowbtm}
                      className={`ms-2 mb-2 ${styles.arrowbtm}`}
                    ></img>
                  </button>
                </div>
                <div className="collapse" id="Transit">
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>
                      Direct{" "}
                    </p>
                    <input
                      className="form-check-input me-1 mt-3"
                      type="radio"
                      name="transit"
                      id="transit"
                      onClick={toggleCheckedTransitDirect}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      Transit{" "}
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="transit"
                      id="transit"
                      onClick={toggleCheckedTransitTransit}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      Transit 2+{" "}
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="transit"
                      id="transit"
                      onClick={toggleCheckedTransitTwoPlus}
                    />
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-row">
                  <button
                    className={`col-md-10 ${styles.titleFiltercollapse}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Fascilities"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    {" "}
                    Fascilities{" "}
                  </button>
                  <button
                    className={`ms-3 ${styles.btnarrow}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Fascilities"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <img
                      src={iconarrowbtm}
                      className={`ms-2 mb-2 ${styles.arrowbtm}`}
                    ></img>
                  </button>
                </div>
                <div className="collapse" id="Fascilities">
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>
                      Luggage{" "}
                    </p>
                    <input
                      className="form-check-input me-1 mt-3"
                      type="radio"
                      name="facilities"
                      id="facilities"
                      onClick={toggleCheckedFacilitiesLuggage}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      In-Flight Meal{" "}
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="facilities"
                      id="facilities"
                      onClick={toggleCheckedFacilitiesInFlightMeal}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      Wi-fi{" "}
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="facilities"
                      id="facilities"
                      onClick={toggleCheckedFacilitiesWifi}
                    />
                  </div>
                </div>
                <hr />

                <div className="d-flex flex-row">
                  <button
                    className={`col-md-10 ${styles.titleFiltercollapse}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#DepatureTime"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    {" "}
                    Depature Time{" "}
                  </button>
                  <button
                    className={`ms-3 ${styles.btnarrow}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#DepatureTime"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <img
                      src={iconarrowbtm}
                      className={`ms-2 mb-2 ${styles.arrowbtm}`}
                    ></img>
                  </button>
                </div>
                <div className="collapse" id="DepatureTime">
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>
                      00:00 - 06:00{" "}
                    </p>
                    <input
                      className="form-check-input me-1 mt-3"
                      type="radio"
                      name="dept_time"
                      id="dept_time"
                      onClick={toggleCheckedDeptTime1}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      06:00 - 12:00{" "}
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="dept_time"
                      id="dept_time"
                      onClick={toggleCheckedDeptTime2}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      12:00 - 18:00
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="dept_time"
                      id="dept_time"
                      onClick={toggleCheckedDeptTime3}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      18:00 - 24:00
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="dept_time"
                      id="dept_time"
                      onClick={toggleCheckedDeptTime4}
                    />
                  </div>
                </div>
                <hr />

                <div className="d-flex flex-row">
                  <button
                    className={`col-md-10 ${styles.titleFiltercollapse}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Arrived"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    {" "}
                    Time Arrived{" "}
                  </button>
                  <button
                    className={`ms-3 ${styles.btnarrow}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Arrived"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <img
                      src={iconarrowbtm}
                      className={`ms-2 mb-2 ${styles.arrowbtm}`}
                    ></img>
                  </button>
                </div>
                <div className="collapse" id="Arrived">
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>
                      00:00 - 06:00{" "}
                    </p>
                    <input
                      className="form-check-input me-1 mt-3"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={toggleCheckedArrivedTime1}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      06:00 - 12:00{" "}
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={toggleCheckedArrivedTime2}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      12:00 - 18:00
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={toggleCheckedArrivedTime3}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      18:00 - 24:00
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={toggleCheckedArrivedTime4}
                    />
                  </div>
                </div>
                <hr />

                {/* <div className="d-flex flex-row">
                  <button
                    className={`col-md-10 ${styles.titleFiltercollapse}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseAirlines"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    {" "}
                    Airlines{" "}
                  </button>
                  <button
                    className={`ms-3 ${styles.btnarrow}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseAirlines"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <img
                      src={iconarrowbtm}
                      className={`ms-2 mb-2 ${styles.arrowbtm}`}
                    ></img>
                  </button>
                </div>
                <div className="collapse" id="collapseAirlines">
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>
                      Garuda Indonesia{" "}
                    </p>
                    <input
                      className="form-check-input me-1 mt-3"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      Air Asia{" "}
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className={`col-md-11 ${styles.valuecollapse}`}>
                      Lion Air{" "}
                    </p>
                    <input
                      className="form-check-input me-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>
                </div>
                <hr />

                <div className="d-flex flex-row">
                  <button
                    className={`col-md-10 ${styles.titleFiltercollapse}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsePrice"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    {" "}
                    Ticket Price{" "}
                  </button>
                  <button
                    className={`ms-3 ${styles.btnarrow}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsePrice"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <img
                      src={iconarrowbtm}
                      className={`ms-2 mb-2 ${styles.arrowbtm}`}
                    ></img>
                  </button>
                </div>
                <div className="collapse" id="collapsePrice">
                  <div className="d-flex flex-row">
                    <p className={`col-md-9 mt-3 ${styles.setPrice}`}>
                      Lowest{" "}
                    </p>
                    <p className={`ms-4 mt-3 ${styles.setPrice}`}>Highest </p>
                  </div>
                  <hr />
                  <div className="d-flex flex-row">
                    <p className={`me-1 ${styles.textDollar}`}>$</p>
                    <input
                      type="text"
                      className={` mb-3 ${styles.inputPriceticket}`}
                      id="address"
                      placeholder="0"
                    />
                    <p className={`ms-auto me-1  ${styles.textDollar}`}>$</p>
                    <input
                      type="text"
                      className={`mb-3 ${styles.inputPriceticket}`}
                      id="address"
                      placeholder="0"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-8">
              {
                loading ? (<></>) : (<FlightCard dataFlights={dataFlights}/>)
              }
              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Search;
