import React from 'react'

const Results = ({results}) => {
  return (
    <div>
        homes
        {results.map((result)=>(
            <div key={result.id}>
                {result.orignal_title}
            </div>
        ))}
    </div>
  )
}

export default Results