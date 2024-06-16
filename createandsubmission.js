import { ethers } from 'ethers';
import pkg from 'zerog-da-sdk';
const { getFlowContract, TESTNET_FLOW_ADDRESS } = pkg;
import dotenv from "dotenv";

dotenv.config()

// create ethers signer from private key and rpc endpoint
const rpc = 'https://rpc-testnet.0g.ai';
const provider = new ethers.JsonRpcProvider(rpc);
const privateKey = process.env.PRIVATE_KEY; // with balance to pay for gas
const signer = new ethers.Wallet(privateKey, provider);

// get flow contract instance
const flowContract = getFlowContract(TESTNET_FLOW_ADDRESS, signer);

const tagBytes = '0x';
const [submission, err] = await file.createSubmission(tagBytes); // check previous example for file
if (err != null) {
    console.log('create submission error: ', err);
    // return;
}
let tx = await flowContract.submit(submission);
await tx.wait();
console.log(tx.hash);