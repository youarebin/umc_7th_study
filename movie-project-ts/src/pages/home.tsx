import styled from "styled-components";
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from "../apis/axios-instance";
import MovieCard2 from "../components/movie-card2";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

interface MoviesResponse {
  results: Movie[];
}

const HomePage: React.FC = () => {
  const { data: movies, isLoading, isError } = useQuery<MoviesResponse>({
    queryKey: ['movies', 'trending'],
    queryFn: async () => {
      const response = await axiosInstance.get<MoviesResponse>(`/trending/movie/day?language=ko-kr`);
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong...</p>;

  return (
    <Container>
      <h3>Trending Movies</h3>
      <MoviesWrapper>
        {movies?.results.map((movie) => (
          <MovieCard2 key={movie.id} movie={movie} />
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