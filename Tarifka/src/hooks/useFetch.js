import { useState,useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data,SetData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('')

    async function fetchData() {
        try {
            const {data:responsedata} = await axios.get(url)
            SetData(responsedata)
            setLoading(false)
        }
        catch (err) {
            setError(err.message)
            setLoading(false)
        }
    };
    useEffect(() => 
    {fetchData()},
    [])
    return{error,loading,data}
    
}
export default useFetch