import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();


function LoaderProvider({ children }) {

    const [isLoading, setIsLoading] = useState(false);

    return (

        <LoaderContext.Provider value={{
            isLoading, setIsLoading
        }}>
            {children}
        </LoaderContext.Provider>

    )

};

function useLoaderContext() {
    return useContext(LoaderContext)
};

export { LoaderProvider, useLoaderContext };