import styled from "styled-components";
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';
import MovieCard2 from "../components/movie-card2";

const HomePage = () => {
    const {data: movies, isLoading, isError} = useQuery({
        queryKey: ['movies', 'trending'],
        queryFn: async () => {
            return await axiosInstance.get(`/trending/movie/day?language=ko-kr`);
        }
    });

    return (
        <Container>
            <h3>Trending movies</h3>
            <MoviesWrapper>
            {movies?.data.results.map((movie) => (
                <MovieCard2 
                    key={movie.id} 
                    movie={movie}
                />
            ))}                
            </MoviesWrapper>
        </Container>

    );
};

export default HomePage;

const Container = styled.div`
    color: white;
`

const MoviesWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 15px;
    max-width: 100%; /* 최대로 컨테이너의 가로에 맞춤 */
`