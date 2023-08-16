import { Routes, Route } from "react-router-dom";
import MovieDetails from "../Component/MovieDetalisPage";
import MoviesList from "../Component/MoviesList";

function Router() {
    return (
        <div className="anvContainer">
            <Routes>
                <Route path='/'>
                    <Route index element={<MoviesList />} />
                    <Route path=':id' element={<MovieDetails />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Router;
