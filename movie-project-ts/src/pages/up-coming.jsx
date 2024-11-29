import MovieList from "../components/movie-list";


const UpComing = () => {
    // const {data: movies, isLoading, isError} = useCustomFetch(`/movie/upcoming?language=ko-kr&page=1`);
    
    // const {data: movies, isLoading, isError} = useQuery({
    //     queryKey: ['movies', 'upcoming'],
    //     queryFn: async () => {
    //         return await axiosInstance.get(`https://api.themoviedb.org/3/movie/upcoming?language=ko-kr&page=1`);
    //     }
    // });

    return (
        <div>
            <MovieList url={'/movie/upcoming'}/>
        </div>
    );
};

export default UpComing;
