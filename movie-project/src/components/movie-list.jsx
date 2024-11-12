import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useState, useEffect, useRef } from "react";
import MovieCard from "./movie-card";
import CardListSkeleton from "./Skeleton/card-list-skeleton";
import Spinner from "./spinner";

const MovieList = ({url, query}) => {
    //2) useInfiniteQuery: 무한 페이지 로딩
    // const {data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage} = useFetch(url);
    // const loadMoreRef = useRef(null);
    
    // useEffect(() => {
    //     if(!hasNextPage || isFetchingNextPage)  return;

    //     //ointersection observer 인스턴스 생성
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             if(entries[0].isIntersecting && !isFetchingNextPage) {
    //                 fetchNextPage();
    //             }
    //         },
    //         {
                
    //             threshold: 0.5,
    //         }
    //     );

    //     // loadMoreRef가 화면에 보일 때 observer 활성화
    //     if (loadMoreRef.current) {
    //         observer.observe(loadMoreRef.current);
    //     }

    //     // observer 해제
    //     return () => {
    //         if (loadMoreRef.current) {
    //             observer.unobserve(loadMoreRef.current);
    //         }
    //     };
    // }, [fetchNextPage, hasNextPage, isFetchingNextPage])

    // if (isLoading) {
    //     return (
    //         <MoviesContainer>
    //             <CardListSkeleton number={20}/>
    //         </MoviesContainer>
    //     )
    // }
    // if (isError) {
    //     return(
    //         <div>
    //             <h1>에러</h1>
    //         </div>
    //     );
    // }

    // const movies = data ? data.pages.flatMap(page => page.results) : [];
    
    // return (
    //     <MoviesContainer>
    //         {movies.map((movie) => (
    //             <MovieCard 
    //                 key = {movie.id}
    //                 movie = {movie}
    //             />
    //         ))}
    //         <div ref={loadMoreRef} style={{ height: "1px" }} />
    //         {isFetchingNextPage && <Spinner/>}
    //     </MoviesContainer>
    // );

    const [page, setPage] = useState(1);
    const { data, totalPages, isLoading, error } = useFetch(url, page);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    if (isLoading) {
        return (
            <MoviesContainer>
                <CardListSkeleton number={20}/>
            </MoviesContainer>
        )
    }
    if (error) {
        return(
            <div>
                <h1>에러</h1>
            </div>
        );
    }

    return (
        <>
            <MoviesContainer>
                {data.map((movie) => (
                    <MovieCard 
                        key = {movie.id}
                        movie = {movie}
                    />
                ))}
            </MoviesContainer>

            <PaginationWrapper>
                <PaginationBtn 
                    onClick={handlePreviousPage}
                    disabled={page==1}>
                이전
                </PaginationBtn>
                <PaginationText>{page}페이지</PaginationText>
                <PaginationBtn 
                    onClick={handleNextPage}
                    disabled={page >= totalPages}>
                이후
                </PaginationBtn>
            </PaginationWrapper>
        </>

    );

};

export default MovieList;

const MoviesContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-gap: 15px;
`;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`;

const PaginationBtn = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #e83261;
    color: white;
    border-radius: 10px;
    width: 70px;
    height: 40px;
    cursor: pointer;
    &:disabled {
        background-color: gray;
        cursor: not-allowed;
    }
`;

const PaginationText = styled.div`
    color: white;
    margin: 0 10px;
`;