import Axios from "axios";

const token = process.env.REACT_APP_STORAGE_TOKEN
console.log("token: ", token)
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
export async function getUploads() {
    try {
        const response = await Axios.get('https://api.web3.storage/user/uploads?before=2020-07-27T17%3A32%3A28Z&page=1&size=10', config);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
export async function getUploadByCID() {
    try {

        const response = await Axios.get('https://api.web3.storage/user/uploads/bafybeidiiok5dmbwipsa73nkry522wnodpjrukazebmo4n5gte3ujf674q', config);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}