import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw Error('could not fetch data');
                }
                return resp.json();
            })
            .then((fetchedData) => {
                setIsLoading(false);
                setData(fetchedData);
                setError(null); 
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            });
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;