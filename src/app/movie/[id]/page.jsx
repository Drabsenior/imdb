import Image from "next/image"

const getMovie = async(movieId)=>{
    console.log(movieId)
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    return  await res.json()
   
    
}

const MoviePage = async ({params}) => {
    const movieId = params.id
    const movie = await  getMovie(movieId)
  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            placeholder='blur'
            blurDataURL="/spinner.svg"
            alt="movie poster"
            className="rounded-lg"
            style={{
                maxwidth:"100%",
                height:"100%"

            }}
            ></Image>
            <div>
                <h2 className="text-lg font-bold mb-2">{movie.title || movie.name}</h2>
                <p className="text-lg mb-2"><span className="mr-1 font-semibold">Overview :</span>{movie.overview}</p>
                <p className="mb-2"><span className="font-semibold mb-3">Date realsed :</span>{movie.release_date || movie.first_air_date}</p>
                <p className="mb-2"><span className="font-semibold mb-3">Rating :</span>{movie.vote_count}</p>
            </div>
        </div>
    </div>
  )
}

export default MoviePage