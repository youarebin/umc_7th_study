import MovieList from "../components/movie-list";

const TopRated = () => {
    return (
        <div>
            <MovieList url={'/movie/top_rated'}/>
        </div>
    );
};

export default TopRated;