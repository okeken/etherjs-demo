import axios from "axios";
import { useEffect, useState } from "react";
import customRpc from '../utils/customRpc';

const useViewNfts = (id)=>{
    const [isLoading, setIsLoading] = useState(false)
    const [isErrored, setIsErrored] = useState(false)
    const [firstTimeLoading, setFirstTimeLoading] = useState(true)
    const [data, setData] = useState({})
useEffect(() => {
    if(!id) return
   loadData()
}, [id])


const loadData = async()=>{
    setIsLoading(true)
     try {
        const add = await customRpc().tokenURI(id)
        let res =  await axios.get(add)
         setData(res?.data)
         setFirstTimeLoading(false)
     } catch (error) {
         setIsErrored(true)      
     }

     finally{
         setIsLoading(false)
     }
  }
    
  return  {isLoading, isErrored, data, setIsLoading, firstTimeLoading}
}

export default useViewNfts;