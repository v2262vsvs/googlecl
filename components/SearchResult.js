import React from 'react'
import Paggination from "./Paggination"

function SearchResult({results}) {
  return (
    <div className='mx-auto w-full px-3 sm:pl-[%5] md:pl=[%15] lg:pl-72 '>
       <p className='text-gray-600 text-xs mb-5 mt-3 '>About {results.searchInformation?.formattedTotalResults} results( {results.searchInformation?.formattedSearchTime} seconds)</p>

       {results.items?.map((result) => (
            <div key={result.link} className='max-w-xl mb-8'>
                <div className='group'>
                    <a href={result.link} className='text-sm'>
                        {result.formattedUrl}
                    </a>
                    <a href={result.link}>
                    <h2 className='truncate text-xl text-blue-800 font-medium group-hover:underline'>{result.title}</h2>
                    </a>
                </div>
                <p className="line-clamp-2">{result.snippet}</p>
            </div>
       ))} 

       
       <Paggination />
    </div>
  )
}

export default SearchResult