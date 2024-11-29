import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./movie-card";
import CardListSkeleton from "./Skeleton/card-list-skeleton";

const GenreMovieList = ({url}) => {
    const {genreId} = useParams();
    const [page, setPage] = useState(1);
    const { data, totalPages, isLoading, error } = useFetch(url, page, genreId);

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

    return(
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
}

export default GenreMovieList;

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