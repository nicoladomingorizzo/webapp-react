import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import SingleMoviePage from "./pages/SingleMoviePage";
import NotFound from "./pages/NotFoundPage";
import StoryPage from "./pages/StoryPage";

import { MoviesProvider } from "./context/MoviesContext";
import { LoaderProvider } from "./context/LoaderContext";

import DefaulLayout from "./layouts/DefaultLayout";
import AdminLayout from "./layouts/AdminLayout";

import DashboardPage from "./pages/admin/DashboardPage";
import CreateMoviePage from "./pages/admin/CreateMoviePage";

function App() {

  return (
    <>



      <LoaderProvider>

        <MoviesProvider>

          <BrowserRouter>

            <Routes>

              <Route element={<DefaulLayout />}>

                <Route index element={<Homepage />} />
                <Route path="/about" element={<StoryPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<SingleMoviePage />} />

                <Route path="/*" element={<NotFound />} />
              </Route>

              <Route element={<AdminLayout />}>
                <Route path="/admin" element={<DashboardPage />} />
                <Route path="/admin/movie/create" element={<CreateMoviePage />} />
              </Route>

            </Routes>

          </BrowserRouter>

        </MoviesProvider>

      </LoaderProvider>

    </>
  )
}

export default App
