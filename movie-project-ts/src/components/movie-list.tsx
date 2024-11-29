import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef } from "react";
import MovieCard from "./movie-card";
import CardListSkeleton from "./Skeleton/card-list-skeleton";
import Spinner from "./spinner";

interface Movie {
  id: number;
  [key: string]: unknown;
}

interface MovieListProps {
  url: string;
  query?: string;
}

const MovieList: React.FC<MovieListProps> = ({ url, query }) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetch<Movie>(url);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return (
      <MoviesContainer>
        <CardListSkeleton number={20} />
      </MoviesContainer>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>에러</h1>
      </div>
    );
  }

  const movies: Movie[] = data ? data.pages.flatMap((page) => page.results) : [];

  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <div ref={loadMoreRef} style={{ height: "1px" }} />
      {isFetchingNextPage && <Spinner />}
    </MoviesContainer>
  );
};

export default MovieList;

const MoviesContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 15px;
`;
