import styled from "styled-components";

const MovieCard = (props) => {
    return(
        <MovieItem>
            <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt='영화 포스터' />
            <div className='overView'/>
            <Info>
                <div className="title">{props.title}</div>
                <div className="release_date">{props.releaseDate}</div>    
            </Info>        
        </MovieItem>
    );
}

export default MovieCard;

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
        border-radius: 10px;/*img와 같이*/
        background-color: rgba(0, 0, 0, 0.6); /* 배경색 및 투명도 설정 */
    }
`;

const Info = styled.div`
    color: white;
    border-radius: 10px;

    .title {
        font-size: 15px;
        font-weight: bold;
    }
    .release_date {
        font-size: 10px;
    }
`;

