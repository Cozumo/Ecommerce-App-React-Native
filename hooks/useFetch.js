import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        setIsLoading(true);

        try{
            const response = await axios.get('http://10.0.2.2:3000/api/products/');
            setData(response.data);
            setIsLoading(false); 
            console.log(response.data);
        }
        catch(err)
        {
            setError(err);
            console.log(err);
        }
        finally
        {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return {data, isLoading, error, fetchData}
}

export default useFetch;