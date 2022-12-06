import React, { useEffect, useRef, useState } from 'react'
import styles from "./profileCard.module.css"
import avatar from '../../../assets/avatar.png'
import iconprofile from '../../../assets/user.png'
import iconstar from '../../../assets/myreview.svg'
import iconsettings from '../../../assets/setting.svg'
import iconlogout from '../../../assets/logout.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const ProfileCard = () => {
  const navigate = useNavigate();

  const { data: user } = useSelector((state) => state.user.user)
  // console.log(user.user_id)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const id = user.user_id
  // console.log(id)
  useEffect(() => {
    console.log(user)
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

    const [form, setForm] = useState({
      avatar:null
    })
  // upload image
  const hiddenFileInput = useRef(null);
    // const navigate = useNavigate();
    const [avatar, setAvatar] = useState('');

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    const updateForm = (e) => {
        e.preventDefault();
        const body = {
          avatar: avatar
        }
        console.log(body)
        axios
            .put(`https://dead-rose-train.cyclic.app/v1/user/update/${data.user_id}`,body,{
            headers: {
            "Content-Type": "multipart/form-data"}})
            .then((res) => {
                console.log(res);
                alert("Update Success");
                return navigate('/profile');
            })
            .catch((err) => {
                console.log(err);
                alert("Update Failed");
            })
    };
    

  const logout = () => {
    localStorage.clear();
    return navigate("/");
  };

  return (
    <>
      {/* {JSON.stringify(data)} */}
      {/* profile card left */}
      <section className={styles.profilecard}>
        <div className='container'>
          <div className='row'>
            {loading ? (
              <h3> Loading.. </h3>
            ) : (
              <form onSubmit={updateForm}>
                <div className={styles.cardProfile}>
                <div className={`d-flex flex-row justify-content-center my-3 px-5 ${styles.picProfile}`}>
                  <img src={data.ava_url} style={{ height: '150px' }} />
                </div>
                <input className="form-control"
                  type="file"
                  htmlFor="image"
                  id="addphoto"
                  onChange={(e) => {setAvatar(e.target.files[0])}} hidden/>
                <div className='d-flex flex-row justify-content-center my-4'>
                  <label type="button" htmlFor='addphoto' className="btn btn-outline-primary">Select Photo</label>
                </div>
                <button type="submit" className='btn d-grid gap-2 col-3 mx-auto' onClick={updateForm} > Post </button>
                <div className='d-flex flex-column align-items-center my-3'>
                  <h2>
                    {data.username}
                  </h2>
                  <p>
                    {data.address}
                  </p>
                </div>
                <div >
                  <h5>
                    Cards
                  </h5>
                  <h5 className={styles.add}>
                    + Add
                  </h5>
                </div>
                <div className={` ${styles.xcard} px-4`}>
                  <div>
                    <h5 className={styles.numCard}>4441 1235 5512 5551</h5>
                  </div>
                  <div>
                    <p className={styles.cardX}>X Card </p>
                    <p className={styles.xMoney}>$ 1,440.2 </p>
                  </div>
                </div>
                <div className={`d-flex flex-row mx-3 ${styles.setProfile}`}>
                  <img src={iconprofile} className={styles.iconprofile} />
                  <Link to={`/profile`} style={{ textDecoration: 'none' }}>
                    <p className={`mx-5 ${styles.textProfile}`}> Profile </p>
                  </Link>
                </div>
                <div className={`d-flex flex-row mx-3 ${styles.setMyreview}`}>
                  <img src={iconstar} className={styles.iconstar} />
                  <p className={`mx-5 ${styles.textMyreview}`}> My Review </p>
                </div>
                <div className={`d-flex flex-row mx-3 ${styles.setSettings}`}>
                  <img src={iconsettings} className={styles.iconsettings} />
                  <Link to={`/updateProfile/user/${user.user_id}`} style={{ textDecoration: 'none' }}>
                    <p className={`mx-5 ${styles.textSettings}`}> Settings </p>
                  </Link>
                </div>
                <button className={`d-flex flex-row mx-3  ${styles.setLogout}`} onClick={logout}>
                  <img src={iconlogout} className={styles.iconlogout} />
                  <p className={`mx-5 ${styles.textLogout}`}> Logout </p>
                </button>
              </div>
              </form>
              
            )
            }
          </div>


        </div>
      </section>
    </>
  )
}

export default ProfileCard