// flight action
// import axios for fetching data
import axios from "axios"

const url = process.env.REACT_APP_BACKEND_URL;
export const listFlightWithFilter = (data, handleSuccess) => {
    return {
        type: 'LIST_FLIGHT_WITH_FILTER',
        payload: new Promise((resolve, reject) => {
            axios({
                url: `${url}/admin/flight/filter/search?arrival_city=${data.arrival_city}&departure_city=${data.departure_city}&transit=${data.transit}&facilities=${data.facilities}&departure_time=${data.departure_time}&arrival_time=${data.arrival_time}&sortby=${data.sortby}`,
                method: "GET"
            })
            .then((res) => {
                console.log('action',data.arrival_city);
                handleSuccess(res);
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
}