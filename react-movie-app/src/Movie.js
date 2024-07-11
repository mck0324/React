function Movie({medium_cover_image,title,summary,genres}) {
    return (
        <div>
            <img src={medium_cover_image} alt={title} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
            <li>
                {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </li>
            </ul>
        </div>
    );
}

export default Movie;