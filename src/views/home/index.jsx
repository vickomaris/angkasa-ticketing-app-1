import React from 'react';
import styles from './home.module.css';
import Navbar from '../../components/module/navbar/index';
import Footer from '../../components/module/footer/index';
import './top.css';
import { Link } from 'react-router-dom';
import icArrow from '../../assets/btnbackright.svg'
import icArrowBlue from '../../assets/arrow.svg'
import icFlight from '../../assets/icOneway.svg'
import icRound from '../../assets/icRoundtrip.svg'
import icArrSearch from '../../assets/icarrowsearch.svg'

// Swiper js carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import NavbarLogin from '../../components/module/navbarLogin';

const Home = () => {
  const token = localStorage.getItem('token');
  return (
    <>
    {token ? <NavbarLogin/> : <Navbar/>}
      <div className={styles.homePage}>
        <main className={styles.main}>
          <div className={styles.banner1}>
            <div>
              <h1>
                Find Your <span>Flight</span>
              </h1>
              <p>and explore the world with us</p>
            </div>
            <img className={styles.qq} src={require('../../assets/homeimage1.png')} alt="banner-1" />
          </div>
          {/* modal */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`modal-dialog ${styles.cstmModal}`}>
              <div className="modal-content">
                <div className="modal-body p-5">
                  <div className="d-flex flex-column">
                    <p className={styles.textTitle}>Hey,
                    </p>
                    <p className={styles.textTitle}>Where you want to go?</p>
                  </div>
                  <div className="d-flex flex-row my-3">
                    <div className={`me-auto ${styles.textSubtitle}`}>Recently Searched</div>
                    <img src={icArrow} alt="bluearrow" />
                  </div>
                  <div className={`d-flex flex-column p-2 ${styles.searchLocation}`}>
                    <div className='d-flex flex-row'>
                      <p className={`ms-2 me-auto ${styles.pFromto}`}>
                        From
                      </p>
                      <p className={`me-2 ${styles.pFromto}`}> To </p>
                    </div>
                    <div className={`d-flex flex-row ${styles.setInput}`}>
                      <input type="text" className={`ms-2 mb-3 col-5  ${styles.inputFormto}`} id="address" placeholder="Medan(IDN)" />
                      <img src={icArrowBlue} className={`mx-3 mb-3 ${styles.cstmicArrow}`} />
                      <input type="text" className={`text-end mb-3 col-5 ${styles.inputToForm}`} id="address" placeholder="Tokyo(JPN)" />
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-2 col-12 mx-auto mt-4">
                    <button className={`p-1 col-6 ${styles.btnoneway}`} type="button"> <img src={icFlight} alt="oneway" /> One Way</button>
                    <button className={`p-1 col-6 ${styles.btnRound}`} type="button"> <img src={icRound} alt="roundwtrip" />  Round Trip</button>
                  </div>
                  <div className="d-flex flex-column mt-4">
                    <p className={styles.textOption}>Depature</p>
                    <input type="date" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <p className={`mt-4 ${styles.textOption}`}>How many person?</p>
                  <div className="d-flex flex-row">
                    <div className="input-group mb-3 me-3">
                      <select className="form-select" id="inputGroupSelect01">
                        <option value="1">1 Child</option>
                        <option value="2">2 Child</option>
                        <option value="3">3 Child</option>
                      </select>
                    </div>
                    <div className="input-group mb-3 ms-3">
                      <select className="form-select" id="inputGroupSelect02">
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adult</option>
                        <option value="3">3 Adult</option>
                      </select>
                    </div>
                  </div>
                  <p className={styles.textOption}>Which class do you want?</p>
                  <div className="d-flex flex-row">
                    <div className="form-check mx-auto">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className={styles.labelCheck} for="flexRadioDefault1">
                        Economy
                      </label>
                    </div>
                    <div className="form-check mx-auto">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className={styles.labelCheck} for="flexRadioDefault1">
                        Business
                      </label>
                    </div>
                    <div className="form-check mx-auto">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className={styles.labelCheck} for="flexRadioDefault1">
                        First Class
                      </label>
                    </div>
                  </div>
                  <button className={`p-1 col-12 mt-4 ${styles.btnSearchaway}`} type="button">  SEARCH FLIGHT <img src={icArrSearch} alt="search" className='ms-5 ' /></button>
                </div>
              </div>
            </div>
          </div>
          {/* end modal */}
          <div className={styles.banner2}>
            <img className={styles.qq} src={require('../../assets/homeimage2.png')} alt="banner-2" />

            <img className={styles.vektor6} src={require('../../assets/vector6.png')} alt="banner-1" />
          </div>
        </main>

        <section>
          <div className={styles.trending}>
            <span>T R E N D I N G</span>
            <div className={styles.title}>
              <span>Trending Destinations</span>
              <span className={styles.v}>View All</span>
            </div>
          </div>
          <div className={styles.cardGrid}>
            <Link to='' className={styles.card} >
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Bali</p>
                  <h3 className={styles.cardHeading}>Indonesia</h3>
                  <h5 className={styles.al}>10 Airlines</h5>
                  <h4 className={styles.fk}>From $200</h4>
                </div>
              </div>
            </Link>
            <Link to='' className={styles.card} href="#">
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Tokyo</p>
                  <h3 className={styles.cardHeading}>Japan</h3>
                  <h5 className={styles.al}>15 Airlines</h5>
                  <h4 className={styles.fk}>From $100</h4>
                </div>
              </div>
            </Link>
            <Link to='' className={styles.card} href="#">
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Sidney</p>
                  <h3 className={styles.cardHeading}>Australia</h3>
                  <h5 className={styles.al}>12 Airlines</h5>
                  <h4 className={styles.fk}>From $300</h4>
                </div>
              </div>
            </Link>

            <Link className={styles.card} href="#">
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Beijing</p>
                  <h3 className={styles.cardHeading}>China</h3>
                  <h5 className={styles.al}>34 Airlines</h5>
                  <h4 className={styles.fk}>From $400</h4>
                </div>
              </div>
            </Link>

            <Link className={styles.card} href="#">
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Jambi</p>
                  <h3 className={styles.cardHeading}>Indonesia</h3>
                  <h5 className={styles.al}>100 Airlines</h5>
                  <h4 className={styles.fk}>From $1000</h4>
                </div>
              </div>
            </Link>

            <div></div>
          </div>
        </section>

        <section>
          <div className={styles.top}>
            <div className={styles.topContainer}>
              <h4>TOP 10</h4>
              <h2>Top 10 destinations</h2>
              <div className={styles.topDestination}>
                <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={5} loop={true} navigation onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/bali.jpg')} alt="" />
                    </div>
                    <p>paris</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/paris.jpg')} alt="" />
                    </div>
                    <p>bali</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/singapore.jpg')} alt="" />
                    </div>
                    <p>singapore</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/agra.jpg')} alt="" />
                    </div>
                    <p>agra</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/sydney.jpg')} alt="" />
                    </div>
                    <p>sydney</p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
