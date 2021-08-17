import { useState } from "react";

export default useApi = (apiFunction) => {
    //Altered 'listings' & 'setListings' to 'data' for general purpose
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    //Need async, can't do in useEffect
    //Renamed from 'loadListings' to request for general use
    const request = async (...args) => {    //Added ability to add arguments for future use
        //Api sauce so don't need try/catch
        setLoading(true);
        const response = await apiFunction(...args);//Funct in api
        setLoading(false);

        //ErrorHandling
        if (!response.ok) {
            setError(true);
            return;
        }
        setError(false);
        setData(response.data);
    };

    return { request, data, error, loading };   //All the data we require in calling funct
};