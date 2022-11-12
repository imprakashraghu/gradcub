import React, {useId} from 'react'
import PropTypes from 'prop-types'

function Input({
    placeholder='',
    overrideClassName='',
    label='Default',
    type='text',
    defaultValue='',
    onChange=oc=>oc,
    value,
    required=false,
    helperText=''
}) {

    const id = useId()

  return (
    <div className='w-full flex flex-col items-center mb-3'>
        <label
            htmlFor={id}
            className='w-full text-left py-1 text-gray-700 text-sm'
        >
            {label} {required && (<span className='text-red-400'>*</span>)}
        </label>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={`${overrideClassName||''} bg-white border rounded w-full p-3 text-sm outline-none focus:outline-none`}
            onChange={onChange}
            value={value}
        />
        <p className='w-full text-xs italic text-gray-600 py-1 text-left'>
            {helperText}
        </p>
    </div>
  )
}

Input.PropTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    overrideClassName: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    helperText: PropTypes.string,
}

export default Input