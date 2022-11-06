import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = 'c64b3b3269ed445ffc3aba392c24278692e93585e5c3394e0884dce3087701c1'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async () => {
    try {
        const apiResponse = await PushAPI.payloads.sendNotification({
            signer,
            type: 3, // target
            identityType: 2, // direct payload
            notification: {
                title: `[SDK-TEST] notification TITLE:`,
                body: `[sdk-test] notification BODY`
            },
            payload: {
                title: `[sdk-test] payload title`,
                body: `sample msg body`,
                cta: '',
                img: ''
            },
            recipients: 'eip155:5:0xB88460Bb2696CAb9D66013A05dFF29a28330689D', // recipient address
            channel: 'eip155:5:0x650bB3f23F16FD615571E05d8dD323D475b2834E', // your channel address
            env: 'staging'
        });

        // apiResponse?.status === 204, if sent successfully!
        console.log('API repsonse: ', apiResponse);
    } catch (err) {
        console.error('Error: ', err);
    }
}

export default sendNotification();