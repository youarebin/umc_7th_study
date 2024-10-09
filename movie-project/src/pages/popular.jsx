import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from "react";
import MovieCard from "../components/movie-card";

const Popular = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: {language: 'ko', page: '1'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjc0YjFmYTE0ZGJkYjhkYzk4YzViNDRkYTUxMzU5MiIsIm5iZiI6MTcyODIyOTQ1MC43NDQxMTcsInN1YiI6IjY3MDJhZjUwMTU5MmVmMWJhOTg1OTMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5tumsVwwMuY-JQCObzRB2tNF_19fyLEXZSSWQ1fnIw'
        }
        };

        axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setMovies(response.data.results)
        })
        .catch(function (error) {
            console.error(error);
        });
    },[]);

    return (
        <Container>
            <MoviesContainer>
            {movies?.map((movie) => (
                <MovieCard 
                    key = {movie.id}
                    poster = {movie.poster_path} 
                    title = {movie.title}
                    releaseDate = {movie.release_date}
                />
            ))}
            </MoviesContainer>
        </Container>
    );
};

export default Popular;

const Container = styled.div`
    height: calc(100vh - 70px); // Navbar 높이만큼 제외
    background-color: black;
    margin-top: 70px; // Navbar 높이만큼 여백 추가
    margin-left: 200px; // SideBar 너비만큼 여백 추가
    padding: 20px 20px;
`;

const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 15px;
`;