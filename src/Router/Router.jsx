import { Routes, Route } from "react-router-dom";
import Header from "../Component/Header";
import MovieDetalisPage from "../Component/MovieDetalisPage";
import MoviesListPage from "../Component/MoviesListPage";

function Router() {
    return (
        <div className="anvContainer">
            <Header />
            <Routes>
                <Route path='/'>
                    <Route index element={<MoviesListPage />} />
                    <Route path=':id' element={<MovieDetalisPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Router;
