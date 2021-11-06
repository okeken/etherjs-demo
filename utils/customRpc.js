import { ethers } from 'ethers'
import { curveAbi } from '../abis/curve'

const rpc = (address ='0x1A92f7381B9F03921564a437210bB9396471050C')=>{
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    const tokenContract = new ethers.Contract(address,curveAbi, provider)
    return tokenContract;
}

export default rpc;

