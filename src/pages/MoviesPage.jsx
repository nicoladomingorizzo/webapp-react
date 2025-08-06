import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";

import { useLoaderContext } from "../context/LoaderContext";

export default function MoviesPage() {

    const { isLoading } = useLoaderContext();

    return (
        <>

            {isLoading && (
                <Loader />
            )};

            <MoviesList />

        </>
    )
}