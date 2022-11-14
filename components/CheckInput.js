import React, {useId} from 'react'
import PropTypes from 'prop-types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Button from './Button'

function CheckInput({
    overrideClassName='',
    label='Default',
    values=[],
    displayKey=''
}) {

    const id = useId()
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    function closeModal() {
        setIsOpen(false)
        setSelected(null)    
    }

  return (
    <div className='w-full flex flex-col items-center mb-3'>
        <label
            htmlFor={id}
            className='w-full text-left py-1 text-gray-700 text-sm mb-2'
        >
            {label}
        </label>
        <div className='w-full grid grid-cols-3'>
            {
                values?.map((item) => (
                    <div key={item[displayKey]} className="p-4">  
                        <div className="flex items-center mr-4 mb-2">  
                            <input type="checkbox" id={`${item[displayKey]}-check`} name={`${item[displayKey]}-check`} value="yes" class="opacity-0 absolute h-5 w-5" />  
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
                            <svg
                                onClick={() => {
                                    setSelected(item)
                                    setIsOpen(true)
                                }} 
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer hover:text-yellow-400 mx-2 w-4 h-4">
                                <title id="unique-id">Know More</title>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                        </div>  
                    </div>
                ))
            }
        </div>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-70" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        {selected?.name}
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className='text-sm text-gray-600 italic'>
                            {selected?.display_name}
                        </p>
                        <p className="text-sm text-gray-500 py-1">
                            {selected?.description}
                        </p>
                    </div>

                    <div className="mt-4">
                        <Button
                            variant='secondary'
                            onClick={closeModal}
                        >
                            Got it, thanks!
                        </Button>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
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