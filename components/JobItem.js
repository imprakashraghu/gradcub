import React from 'react'
import moment from 'moment'

function JobItem({ title, content, timestamp, url }) {
  return (
    <div className='w-full flex flex-col items-center border rounded shadow bg-white p-3 my-1'>
        <a 
            href={url} target='__blank' 
            className='w-full text-md text-black font-medium text-left py-1 hover:underline cursor-pointer'
        >{title}</a>
        <p className='line-clamp-3 w-full text-sm text-gray-600 text-left'>
            {content}
        </p>
        <p className='w-full text-left text-xs text-gray-400 pt-1'>{moment(timestamp)?.fromNow()}</p>
    </div>
  )
}

export default JobItem