import Axios from "axios";
var FormData = require('form-data');

const token = process.env.REACT_APP_STORAGE_TOKEN
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
export async function getUploads() {
    try {
        const response = await Axios.get('https://api.web3.storage/user/uploads?before=2020-07-27T17%3A32%3A28Z&page=1&size=10', config);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}
export async function getMetadataByCID() {
    try {

        const response = await Axios.get('https://api.web3.storage/user/uploads/bafybeidiiok5dmbwipsa73nkry522wnodpjrukazebmo4n5gte3ujf674q', config);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function getCarFileByCID(cid) {
    const carConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
            accept: 'application/vnd.ipld.car'
        }
    };
    try {
        const response = await Axios.get(`https://api.web3.storage/car/${cid}`, carConfig);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getFileContent(cid) {
    try {
        const response = await Axios.get(`https://ipfs.io/ipfs/${cid}`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}



export async function uploadFile(textData, name) {
    try {
        // TO DO: encode name
        const token = process.env.REACT_APP_STORAGE_TOKEN;
        const fileconfig = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
                'X-NAME': `${name}`
            }
        };
        const data = textData;
        let formData = new FormData();
        let fileName = name;
        let file = new File([data], fileName);
        formData.append('file', file, fileName);
        const response = await Axios.post('https://api.web3.storage/upload', formData, fileconfig);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}