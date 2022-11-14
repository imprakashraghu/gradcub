import React from 'react'
import Brand from './Brand'

function Footer() {
  return (
    <div className='w-full bg-white'>
      <div className='w-10/12 mx-auto bg-transparent border-t py-12 flex flex-col items-center justify-center'>
          <Brand />
          <p className='w-full text-gray-600 text-sm text-center py-6'>
              © {new Date().getFullYear()} Gradcub. Open Source Tool.
          </p>
      </div>
    </div>
  )
}

export default Footer