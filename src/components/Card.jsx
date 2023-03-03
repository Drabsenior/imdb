import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
const Card = ({result}) => {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
        <Link href={`/movie/${result.id}`}>
            <Image src={
                `https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`
            }
            width={500}
            height={300}
            className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            style={{
                maxWidth:'100%',
                height:'auto',
                maxHeight:'140px',
                objectFit:'cover'
                

            }}
            placeholder='blur'
            blurDataURL='/spinner.svg'
            alt='image is not available'
            >

            </Image>
            <div className='p-2'>
                <p className='line-clamp-2 text-sm'>{result.overview}</p>
                <h2 className='truncate font-semibold text-lg'>{result.title || result.name}</h2>
                <p className='flex items-center'>{result.release_date || result.first_air_date}<FiThumbsUp className='h-5 ml-3 mr-1'/>{result.vote_count}</p>
            </div>
        </Link>
    </div>
  )
}

export default Card