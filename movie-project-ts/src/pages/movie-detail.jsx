import * as M from '../styles/movie-detail.style';
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from "../apis/axios-instance"

const MovieDetail = () => {
    const {movieId} = useParams();

    const {data: movies, isLoading, isError} = useQuery({
        queryKey: ['movies', 'movie'],
        queryFn: async () => {
            return await axiosInstance.get(`/movie/${movieId}?language=ko-k`);
        }
    });
    const {data: actors} = useQuery({
        queryKey: ['movies', 'credits'],
        queryFn: async () => {
            return await axiosInstance.get(`/movie/${movieId}/credits?language=ko-k`);
        }
    });
    const {data: reviews} = useQuery({
        queryKey: ['movies', 'reviews'],
        queryFn: async () => {
            return await axiosInstance.get(`/movie/${movieId}/reviews`);
        }
    });

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
        <M.Container>
            <M.TopContainer>
                <M.InfoWrapper>
                    <h1>{movies.data?.title}</h1>
                    <div>평균: {movies.data?.vote_average}</div>
                    <div>{movies.data?.release_date}</div>
                    <div>{movies.data?.runtime}분</div>
                    <div className="tagline">{movies.data?.tagline}</div>
                    <div>{movies.data?.overview}</div>
                </M.InfoWrapper>
                <M.Gradient>
                    <M.BackdropPathWrapper>
                        <img src={`https://image.tmdb.org/t/p/w500${movies.data?.backdrop_path}`} alt='영화 포스터' />
                    </M.BackdropPathWrapper> 
                </M.Gradient>
            </M.TopContainer>

            <M.ContentContainer>
                <h3>감독/출연</h3>
                <M.PeopleContainer>
                    {actors.data?.cast.map((actor) => (
                        <M.PeopleWrapper key={actor.id}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="없음"/>
                            </div>
                            <M.NameWrapper>
                                <div className="name">{actor.name}</div>
                                <div className="role">{actor.character}({actor.known_for_department})</div>
                            </M.NameWrapper>
                        </M.PeopleWrapper>
                    ))}
                </M.PeopleContainer>
            </M.ContentContainer>

            <M.ContentContainer>
                <h3>리뷰</h3>
                <M.ReviewContainer>
                    {reviews?.data.results.map((review) => (
                        <M.ReviewWrapper key={review.id}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}/>   
                            </div>
                            <div className='author_info'>
                                <div className='info_top'>
                                    <div>{review.author_details.username}</div>
                                    <div>
                                        {review.author_details.rating
                                            ? "⭐️".repeat(Math.floor(review.author_details.rating))
                                            : "No rating"}
                                    </div>                                    
                                </div>
                                <div>{review.content}</div>
                            </div>
                        </M.ReviewWrapper>
                    ))}
                </M.ReviewContainer>
            </M.ContentContainer>
        </M.Container>
    );
};

export default MovieDetail;
