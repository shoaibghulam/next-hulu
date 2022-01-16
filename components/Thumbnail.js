import Image from 'next/image'
import React from 'react'
import { ThumbUpIcon} from '@heroicons/react/solid'
import { forwardRef } from 'react'
const  Thumbnail=forwardRef(({results}, ref)=> {
    const baseUrl="https://image.tmdb.org/t/p/original/"
    return (
        <div
        ref={ref}
        className="p-2 group cursor-pointer transition ease-in transform sm:hover:scale-105 hover:z-50">
          <Image
          layout='responsive'
          src={`${baseUrl}${results.backdrop_path  || results.poster_path}`}
          width={1920}
          height={1080}
          />
          <div className='p-2'>
            <p className="truncate max-w-md">{results.overview}</p>
          </div>
          <h2 className="mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">{results.title || results.original_title}</h2>
          <p className="flex flex-items-center opacity-0 group-hover:opacity-100">
          {results.media_type && `${results.media_type} .`} {" "}
          {results.release_date || results.first_air_date} .{" "}
          <ThumbUpIcon className="h-5 mx-2"/> {results.vote_count}
          </p>
        </div>
    )
}
)
export default Thumbnail