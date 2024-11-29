import MovieList from "../components/movie-list";

const Popular = () => {
    // const {data: movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=ko-kr&page=1`);
    
    // 1) useQuery 
    // const {data: movies, isLoading, isError} = useQuery({
    //     queryKey: ['movies', 'popular'],
    //     queryFn: async () => {
    //         return await axiosInstance.get(`https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=1`);
    //     }
    // });

    return (
        <div>
            <MovieList url={'/movie/popular'}/>
        </div>
    );
};

export default Popular;