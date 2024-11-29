import MovieList from "../components/movie-list";

const UpComing = () => {
    return (
        <div>
            <MovieList url={'/movie/upcoming'}/>
        </div>
    );
};

export default UpComing;
