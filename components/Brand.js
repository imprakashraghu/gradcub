import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

function Brand({
    overrideClassName=''
}) {
  return (
    <Link href='/'>
        <div className={`${overrideClassName||''} cursor-pointer flex flex-row items-center justify-center`}>
            <div className='w-8 h-8 bg-yellow-400 rounded-full'></div>
            <h1 className='px-2 text-black font-bold text-xl'>
                gradcub
                <span className='bg-gray-200 rounded-lg mx-2 text-gray-700 text-xs text-center px-2 py-1'>beta</span>
            </h1>
        </div>
    </Link>
  )
}

Brand.PropTypes = {
    overrideClassName: PropTypes.string
}

export default Brand