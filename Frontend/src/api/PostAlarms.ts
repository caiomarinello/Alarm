import axios from "axios";

export function postAlarm() {
    return axios.post('http://127.0.0.1:3000/teste', {
        id: 5,
        title: "testeTitle",
        description: "testeDescription"
    })
    .then(function(response) {
        console.log("Response data:", response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}
