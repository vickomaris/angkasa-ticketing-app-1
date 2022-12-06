// user action
import axios from "axios";

export const register = (body, handleSuccess) => {
        return new Promise((resolve, reject) => {           
            axios.post(`https://dead-rose-train.cyclic.app/v1/user/register`, body)
            .then((response) => {
                handleSuccess(response)
                resolve(response)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    export const login = (form, navigate) => async(dispatch) => {
        try{
            dispatch({type:"LOGIN_PENDING"})
            const result = await axios.post(`https://dead-rose-train.cyclic.app/v1/user/login`, form)
            console.log(result.data.data.data)
            console.log(result.data.data.token)
            const user = result.data.data
            // console.log(user)
            localStorage.setItem('token', user.token)
            localStorage.setItem('user', user.data)
            alert("Login Success");
            dispatch({type:"LOGIN_FULFILLED", payload:user})
            navigate('/')
        }catch(error){
            console.log(error)
            alert("Username or Password wrong");
            dispatch({type:"LOGIN_REJECTED"})
        }   
    }

export const detailProfile = (user_id) => {
    return {
        type: 'GET_DATA_PROFILE',
        payload: axios ({
            url: `https://dead-rose-train.cyclic.app/v1/${user_id}`,
            method:"GET"
        })
    }
}

export const updateProfile = (user_id, update, handleSuccess) => ({
    type : "UPDATE_PROFILE",
    payload : new Promise((resolve, reject) => {
        axios
        .put(`https://dead-rose-train.cyclic.app/v1/user/update/${user_id}`, update)
        .then((response) => {
            console.log(response.data)
            handleSuccess(response.data)
            resolve(response);
        })
        .catch((err) => {
            reject(err)
        })
    })
})

export const deleteProfile = (user_id) => ({
    type: "DELETE_PROFILE",
    payload : new Promise((resolve, reject) => {
       axios
        .delete(`https://dead-rose-train.cyclic.app/v1/delete/${user_id}`)
        .then((response) => {
            console.log(response.data)
            resolve(response);
        })
        .catch((err) => {
            reject(err)
        }) 
    })
})