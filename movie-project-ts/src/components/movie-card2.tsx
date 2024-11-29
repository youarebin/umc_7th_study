import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const MovieCard2 = ({movie}) => {
    const navigate = useNavigate();

    return(
        <MovieItem key={movie.id} onClick={() => {navigate(`/movies/${movie.id}`)}}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
            <Info className="info">
                <h2>{movie.title}</h2>
                <span>평균 {movie.vote_average}</span>
                <span>개봉일 {movie.release_date}</span>
            </Info>
        </MovieItem>
    );
}

MovieCard2.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,      
        backdrop_path: PropTypes.string,       
        title: PropTypes.string,
        vote_average: PropTypes.string,
        release_date: PropTypes.string        
    }).isRequired,        
}  

export default MovieCard2;

const MovieItem = styled.div`
    position: relative;
    border-radius: 10px;
    cursor: pointer;

    img {
        width: 100%;
        border-radius: 10px;
    }
    
    &:hover .info {
        display: flex;
    }
`

const Info = styled.div`
    display: none;
    flex-direction: column;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;

    h2{
        margin: 0;
    }
`