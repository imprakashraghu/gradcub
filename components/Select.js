import React, {useId} from 'react'
import PropTypes from 'prop-types'

function Select({
    placeholder='',
    overrideClassName='',
    label='Default',
    defaultValue=null,
    onChange=oc=>oc,
    value,
    children
}) {

    const id = useId()

  return (
    <div className='w-full flex flex-col items-center'>
        <label
            htmlFor={id}
            className='w-full text-left py-1 text-gray-700 text-sm'
        >
            {label}
        </label>
        <select
            id={id}
            className={`${overrideClassName||''} ${value===null?'text-gray-500':''} bg-white border rounded w-full p-3 text-sm outline-none focus:outline-none mb-3`}
            onChange={onChange}
            value={value}
        >
            {children}
        </select>
    </div>
  )
}

Select.PropTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    overrideClassName: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
}

export default Select