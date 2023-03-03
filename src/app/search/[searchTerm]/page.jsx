import Results from "@/components/Results";


const SearchTerm = async ({params}) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`)

    if(!res.ok){
        throw new Error('Error fetching data')
    }
    const data = await res.json()
    const results = data.results;

  return (
    <div>
        {results && results.length ===0 && (
            <h1 className="text-center">No results found</h1>
        )}
         {results && <Results results={results}/>}
    </div>
  )
}

export default SearchTerm