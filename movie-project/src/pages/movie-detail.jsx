import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const {movieId} = useParams();

    const {data: movies, isLoading, isError} = useCustomFetch(`/movie/${movieId}?language=ko-k`);
    const {data: actors} = useCustomFetch(`/movie/${movieId}/credits?language=ko-k`);

    if (isLoading) {
        return(
            <div>
                <h1>로딩중 입니다.</h1>
            </div>
        );
    }
    if (isError) {
        return(
            <div>
                <h1>에러</h1>
            </div>
        );
    }
    return (
        <div>
            <TopContainer>

                    <InfoWrapper>
                    <h1>{movies.data?.title}</h1>
                    <div>평균: {movies.data?.vote_average}</div>
                    <div>{movies.data?.release_date}</div>
                    <div>{movies.data?.runtime}</div>
                    <div className="tagline">{movies.data?.tagline}</div>
                    <div>{movies.data?.overview}</div>
                    </InfoWrapper>
                    <Gradient>
                                          <BackdropPathWrapper>
                        <img src={`https://image.tmdb.org/t/p/w500${movies.data?.backdrop_path}`} alt='영화 포스터' />
                    </BackdropPathWrapper> 
                    </Gradient>
                  
            </TopContainer>

            <BottomContainer>
                <h2>감독/출연</h2>
                <PeopleContainer>
                    {actors.data?.cast.map((actor) => (
                        <ProfileWrapper key={actor.id}>
                            <ProfileImgWrapper>
                                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="없음"/>
                            </ProfileImgWrapper>
                            <NameWrapper>
                                <div className="name">{actor.name}</div>
                                <div className="role">{actor.character}({actor.known_for_department})</div>
                            </NameWrapper>
                        </ProfileWrapper>
                    ))}
                </PeopleContainer>
            </BottomContainer>
        </div>
    );
};

export default MovieDetail;

const TopContainer = styled.div`
    color: white;
    height: 400px;
    position: relative;
`;

const Gradient = styled.div` //그라데이션
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 20px; /* 이미지와 동일하게 테두리를 적용 */
        background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
    }
`;

const InfoWrapper = styled.div`
    z-index: 2;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    width: 450px;
    height: 100%;
    .tagline {
        font-style: italic;
        font-weight: bold;
        font-size: 20px;
        padding: 15px 0;
    }
`;

const BackdropPathWrapper = styled.div`
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        // object-fit: cover; /* div 크기에 맞춰 이미지가 꽉 차도록 */
        border-radius: 20px;
    }
     
`;

const BottomContainer = styled.div`
    color: white;
`;

const PeopleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 15px;
`;

const ProfileWrapper = styled.div`
    color: white;
`;

const ProfileImgWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1.5px solid white;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* 이미지를 div에 딱 맞게 */
    }
`;

const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .name {
        font-weight: bold;
        font-size: 13px;
    }
    .role {
        font-size: 11px;
        color: gray;
    }
`;