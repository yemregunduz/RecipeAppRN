import axios from "axios";
import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true)
    const [data,setData]  = useState()

    const fetchData = async () => {
        try {
            const response = await axios.get(url)
            setData(response.data)
            setLoading(false)
        } 
        catch (error) {
            setError(error.message)
            setLoading(false)
        }
        
    }
    useEffect(()=>{
        fetchData();
    },[])
    return [data,error,loading]   
}

export default useFetch