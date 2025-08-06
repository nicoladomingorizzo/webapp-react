import { createContext, useContext, useEffect, useState } from "react";
import { useLoaderContext } from "./LoaderContext";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
    const apiUrl = 'http://localhost:3030/api/movies/';
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState(null);
    const { setIsLoading } = useLoaderContext();

    useEffect(() => {
        setIsLoading(true)
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data)
                return data;
            })
            .catch(err => {
                setIsError('Si è verificato un errore durante il recupero dei dati. Riprova in un secondo momento.')
            })
            .finally(() => {
                setIsLoading(false)
            });
    }, []);

    return (
        <MoviesContext.Provider value={{
            movies,
            isError,
            setMovies
        }} >
            {children}
        </MoviesContext.Provider>
    )
};

function useMoviesContext() {
    return useContext(MoviesContext)
};

export { MoviesProvider, useMoviesContext };