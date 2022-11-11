import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = process.env.REACT_APP_PUSH_PK // channel private key
const RECIPIENT_ADDR = process.env.REACT_APP_PUSH_RECIPIENT_ADDR
const CHANNEL_ADDR = process.env.REACT_APP_PUSH_CHANNEL_ADDR
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async () => {
    try {
        const apiResponse = await PushAPI.payloads.sendNotification({
            signer,
            type: 3, // target
            identityType: 2, // direct payload
            notification: {
                title: `wow someone posted to de-git`,
                body: `what a degen`
            },
            payload: {
                title: `[sdk-test] payload title`,
                body: `sample msg body`,
                cta: '',
                img: ''
            },
            recipients: `eip155:5:${RECIPIENT_ADDR}`, // recipient address
            channel: `eip155:5:${CHANNEL_ADDR}`, // your channel address
            env: 'staging'
        });

        // apiResponse?.status === 204, if sent successfully!
        console.log('API repsonse: ', apiResponse);
    } catch (err) {
        console.error('Error: ', err);
    }
}

export default sendNotification();