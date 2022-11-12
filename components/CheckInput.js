import React, {useId} from 'react'
import PropTypes from 'prop-types'

function CheckInput({
    overrideClassName='',
    label='Default',
    values=[],
    displayKey=''
}) {

    const id = useId()

  return (
    <div className='w-full flex flex-col items-center mb-3'>
        <label
            htmlFor={id}
            className='w-full text-left py-1 text-gray-700 text-sm mb-2'
        >
            {label}
        </label>
        <div className='w-full grid grid-cols-3 gap-2'>
            {
                values?.map((item) => (
                    <div key={item[displayKey]} className="p-4">  
                        <div className="flex items-center mr-4 mb-2">  
                            <input type="checkbox" id={`${item}-check`} name={`${item[displayKey]}-check`} value="yes" class="opacity-0 absolute h-5 w-5" />  
                            <div className="bg-white border-2 rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-yellow-500">  
                            <svg className="hidden w-3 h-3 text-yellow-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">  
                                <g fill="none" fill-rule="evenodd">  
                                <g transform="translate(-9 -11)" fill="#000" fill-rule="nonzero">  
                                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />  
                                </g>  
                                </g>  
                            </svg>  
                            </div>  
                            <label for={`${item[displayKey]}-check`} className="text-sm select-none">{item[displayKey]}</label>  
                        </div>  
                    </div>
                ))
            }
        </div>
    </div>
  )
}

CheckInput.PropTypes = {
    placeholder: PropTypes.string,
    overrideClassName: PropTypes.string,
    label: PropTypes.string,
    displayKey: PropTypes.string,
    values: PropTypes.array,
}

export default CheckInput