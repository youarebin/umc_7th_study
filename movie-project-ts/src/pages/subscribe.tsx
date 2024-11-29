import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function Subscribe() {
    const navigate = useNavigate();
    const {data: movies, isLoading, isError} = useQuery({
        queryKey: ['movies', 'trending'],
        queryFn: async () => {
            return await axiosInstance.get(`/trending/movie/day?language=ko-kr`);
        }
    });
    const {data: genres} = useQuery({
        queryKey: ['movies', 'genres'],
        queryFn: async () => {
            return await axiosInstance.get(`/genre/movie/list?language=ko-kr`);
        }
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768, // 화면 너비 768px 이하
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return(
        <Container>
            <h1>오늘의 트렌드 영화</h1>
            <Slider {...settings}>
                {movies?.data.results.map((movie) => (
                    <MovieWrapper key={movie.id}>
                        <InfoWrapper>
                            <div className='title'>{movie.title}</div>
                            <div>{movie.vote_average}</div>    
                        </InfoWrapper>                        
                        <Poster>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='영화 포스터' />
                        </Poster>
                    </MovieWrapper>
                ))}
            </Slider>
            
            <h1>장르별 영화</h1>
            <GenresWrapper>
                {genres?.data.genres.map((genre) => (
                    <Genre key={genre.id} onClick={() => {navigate(`/genre/${genre.id}`)}}>
                        {genre.name}
                    </Genre>
                ))}
            </GenresWrapper>
        </Container>
    )
}

export default Subscribe;

const Container = styled.div`
    color: white;
    padding: 20px;
`;

const MovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 200px;
`;

const Poster = styled.div`
    width: 90%;
    aspect-ratio: 16/9; // 16:9 비율 유지
    overflow: hidden;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const InfoWrapper = styled.div`
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .title{
        font-weight: bold;
        font-size: 20px;
    }
`;

const GenresWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 20px 0;
`;

const Genre = styled.div`
    height: 100px;
    border-radius: 10px;
    border: none;
    color: white;
    font-weight: bold;
    background-color: blue;
    padding: 10px;
    cursor: pointer;
`;
