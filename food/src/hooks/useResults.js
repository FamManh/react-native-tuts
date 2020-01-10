import {useState, useEffect} from 'react';
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        searchApi("pasta");
    }, []);

    const searchApi = async searchTerm => {
        try {
            let response = await yelp.get("/search", {
                params: {
                    limit: 25,
                    term: searchTerm,
                    location: "san jose"
                }
            });



            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage("Something went wrong, try later.");
        }
    };

    return [searchApi, results, errorMessage];
}
