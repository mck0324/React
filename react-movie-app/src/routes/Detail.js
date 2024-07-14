import { useEffect, useState } from "react";
import { useParams  } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await (fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
        ).json();
        // console.log(json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[]);
    // console.log(movie);
    return (
        <div>
            {loading ? (
                <h1>Detail Loading...</h1>
            ) : (
                <div>
                    <h1>{movie.title}</h1>
                    <img src={movie.medium_cover_image} alt={movie.title}/>
                    <ul>
                        <li>
                            {movie.genres.map((g) => (
                                <li key={g}>{g}</li>
                            ))}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
export default Detail;