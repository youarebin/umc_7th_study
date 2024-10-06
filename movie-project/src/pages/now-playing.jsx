import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
//api key: c674b1fa14dbdb8dc98c5b44da513592
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjc0YjFmYTE0ZGJkYjhkYzk4YzViNDRkYTUxMzU5MiIsIm5iZiI6MTcyODIyOTQ1MC43NDQxMTcsInN1YiI6IjY3MDJhZjUwMTU5MmVmMWJhOTg1OTMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5tumsVwwMuY-JQCObzRB2tNF_19fyLEXZSSWQ1fnIw

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            params: { language: 'en-US', page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjc0YjFmYTE0ZGJkYjhkYzk4YzViNDRkYTUxMzU5MiIsIm5iZiI6MTcyODIyOTQ1MC43NDQxMTcsInN1YiI6IjY3MDJhZjUwMTU5MmVmMWJhOTg1OTMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5tumsVwwMuY-JQCObzRB2tNF_19fyLEXZSSWQ1fnIw'
            }
        };

        axios.request(options)
            .then(function (response) {
                console.log(response.data);
                setMovies(response.data.results);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []); 

    return (
        <Container>
            <MoviesContainer>
            {movies?.map((movie) => (
                <MovieItem key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='영화 포스터' />
                    <div className='overView'/>
                </MovieItem>
            ))}
            </MoviesContainer>
        </Container>
    );
};

export default NowPlaying;

const Container = styled.div`
    width: calc(100vw - 200px); // SideBar 너비만큼 제외
    height: calc(100vh - 70px); // Navbar 높이만큼 제외
    background-color: black;
    margin-top: 70px; // Navbar 높이만큼 여백 추가
    margin-left: 200px; // SideBar 너비만큼 여백 추가
    padding: 30px 30px;
`;

const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 15px;
`;

const MovieItem = styled.div`
    position: relative; /*부모 요소*/
    cursor: pointer;
    img {
        width: 100%;
        border-radius: 10px;
    }

    &:hover .overView{
        display: block; 
        position: absolute; /*자식 요소: 부모로부터 위치 맞추기*/
        top: 0;
        left: 0; 
        width: 100%; 
        height: 100%;
        border-radius: 30px;/*img와 같이*/
        background-color: rgba(0, 0, 0, 0.6); /* 배경색 및 투명도 설정 */
    }
`;