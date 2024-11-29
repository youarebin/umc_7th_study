import MovieList from "../components/movie-list";

const Popular = () => {
    return (
        <div>
            <MovieList url={'/movie/popular'}/>
        </div>
    );
};

export default Popular;