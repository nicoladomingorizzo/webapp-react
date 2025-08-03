import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
    const apiUrl = 'http://localhost:3030/api/movies/';
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data)
                return data;
            })
            .catch(err => {
                setIsError('Si è verificato un errore durante il recupero dei dati. Riprova in un secondo momento.')
            })
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