import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState('');

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
            const { data } = await response.json();

            setGifUrl(data[0]?.images?.downsized_medium?.url)
        } catch (error) {
            setGifUrl('https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif')
        }
    }

    useEffect(() => {
        if(keyword) fetchGifs();
    }, [keyword])

    return gifUrl;
}

export default useFetch;

/*
CODE EXPLANATION:
This is a React custom hook that fetches a GIF from the Giphy API based on a keyword. The hook uses the "useEffect" and "useState" hooks from the React library. 
The API_KEY is imported from the environment variables and is used to authenticate the API request. The hook returns the URL of the GIF, which is stored in the 
component's state using the "setGifUrl" function. When the component that uses this hook is mounted, the "useEffect" hook will run the "fetchGifs" function, which sends a 
GET request to the Giphy API to retrieve a GIF based on the keyword. If the request is successful, the URL of the GIF is set in the component's state using the "setGifUrl" function. 
If an error occurs, the hook will set a default GIF URL as a fallback.

*/
