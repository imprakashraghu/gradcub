import React from 'react'
import PropTypes from 'prop-types'

function TechItem({
    name
}) {
  return (
    <div className='w-full max-h-10 text-center px-3 py-2 text-sm text-white bg-black shadow-sm border rounded-lg mx-1'>
        <p>{name}</p>
    </div>
  )
}

TechItem.PropTypes = {
    name: PropTypes.string.isRequired,
}

export default TechItem