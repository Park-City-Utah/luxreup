export default useApi = () => {
    //Altered 'listings' & 'setListings' to 'data' for general purpose
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    //Need async, can't do in useEffect
    //Renamed from 'loadListings' to request for general use
    const reqeust = async () => {
        //Api sauce so don't need try/catch
        setLoading(true);
        const response = await listingsApi.getListings();//Funct in api
        setLoading(false);

        //ErrorHandling
        if (!response.ok) {
            setError(true);
            return;
        }
        setError(false);
        setListings(response.data);
    }
}