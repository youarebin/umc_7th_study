import MovieList from "../components/movie-list";

const NowPlaying = () => {
    // const {data: movies, isLoading, isError} = useCustomFetch(`/movie/now_playing?language=ko-kr&page=1`);
    
    // const {data: movies, isLoading, isError} = useQuery({
    //     queryKey: ['movies', 'now_playing'],
    //     queryFn: async () => {
    //         return await axiosInstance.get(`https://api.themoviedb.org/3/movie/now_playing?language=ko-kr&page=1`);
    //     }
    // });

    return (
        <div>
            <MovieList url={'/movie/now_playing'}/>
        </div>
    );
};

export default NowPlaying;
