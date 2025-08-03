import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import SingleMoviePage from "./pages/SingleMoviePage";
import DefaulLayout from "./layouts/DefaultLayout";
import NotFound from "./pages/NotFoundPage";
import { MoviesProvider } from "./context/MoviesContext";

function App() {

  return (
    <>

      <MoviesProvider>

        <BrowserRouter>

          <Routes>

            <Route element={<DefaulLayout />}>

              <Route index element={<Homepage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:id" element={<SingleMoviePage />} />

            </Route>
            <Route path="/*" element={<NotFound />} />

          </Routes>

        </BrowserRouter>

      </MoviesProvider>

    </>
  )
}

export default App
