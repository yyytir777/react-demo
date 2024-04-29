import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from "../Components/MovieList.jsx";
import Header from "../Components/Header.jsx";
import Home from "../Components/Home.jsx";
import Person from "../Components/Person.jsx";
import TVprogram from "../Components/TVprogram.jsx";
import Login from "../Components/Login.jsx"

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/movie' element={<Movie/>}/>
                <Route path='/person' element={<Person/>}/>
                <Route path='/tvprogram' element={<TVprogram/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;