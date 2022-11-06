import Axios from "axios";

export async function getUploads() {
    try {
        // var token = process.env.APP_TOKEN
        const token = "<TOKEN>"
        console.log("token: ", token)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const response = await Axios.get('https://api.web3.storage/user/uploads?before=2020-07-27T17%3A32%3A28Z&page=1&size=10', config);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}