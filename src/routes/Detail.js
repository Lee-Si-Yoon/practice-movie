import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);

  const getMoviesDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieData(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMoviesDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <strong> Loading </strong>
      ) : (
        <div>
          <img src={movieData.medium_cover_image} alt={movieData.id} />
          <h1>{movieData.title_long}</h1>
          {movieData.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
          <p>{movieData.like_count} likes</p>
          <p>{movieData.rating} / 10</p>
          <p>{movieData.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
