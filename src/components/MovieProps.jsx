const MovieProps = (movie) => {
    return (
        <div key={movie.Title} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={ movie.Poster } alt="" />
        </a>
        <div className="p-5">
            <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               { movie.Title }
            </h5>
            </a>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Year - { movie.Year }</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Runtime - { movie.Runtime }</span>
        </div>
        </div>
    )
}

export default MovieProps