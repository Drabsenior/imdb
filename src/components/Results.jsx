
const Results = ({results}) => {
    console.log(results)
    return (
        <div>
        homes
        {results.map((result)=>(
            <div key={result.id}>
                {result.original_title}
                <h1>{result.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default Results