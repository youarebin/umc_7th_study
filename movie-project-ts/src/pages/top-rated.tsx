import MovieList from "../components/movie-list";

const TopRated = () => {
    // const {data: movies, isLoading, isError} = useCustomFetch(`/movie/top_rated?language=ko-kr&page=1`);

    // const {data: movies, isLoading, isError} = useQuery({
    //     queryKey: ['movies', 'top_rated'],
    //     queryFn: async () => {
    //         return await axiosInstance.get(`https://api.themoviedb.org/3/movie/top_rated?language=ko-kr&page=1`);
    //     }
    // });

    return (
        <div>
            <MovieList url={'/movie/top_rated'}/>
        </div>
    );
};

export default TopRated;