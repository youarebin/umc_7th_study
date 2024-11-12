import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef } from "react";
import MovieCard from "./movie-card";
import CardListSkeleton from "./Skeleton/card-list-skeleton";
import Spinner from "./spinner";

const MovieList = ({url, query}) => {
    const {data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage} = useFetch(url);
    const loadMoreRef = useRef(null);
    
    useEffect(() => {
        if(!hasNextPage || isFetchingNextPage)  return;

        //ointersection observer 인스턴스 생성
        const observer = new IntersectionObserver(
            (entries) => {
                if(entries[0].isIntersecting && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            {
                
                threshold: 0.5,
            }
        );

        // loadMoreRef가 화면에 보일 때 observer 활성화
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        // observer 해제
        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [fetchNextPage, hasNextPage, isFetchingNextPage])

    if (isLoading) {
        return (
            <MoviesContainer>
                <CardListSkeleton number={20}/>
            </MoviesContainer>
        )
    }
    if (isError) {
        return(
            <div>
                <h1>에러</h1>
            </div>
        );
    }

    const movies = data ? data.pages.flatMap(page => page.results) : [];
    
    return (
        <MoviesContainer>
            {movies.map((movie) => (
                <MovieCard 
                    key = {movie.id}
                    movie = {movie}
                />
            ))}
            <div ref={loadMoreRef} style={{ height: "1px" }} />
            {isFetchingNextPage && <Spinner/>}
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