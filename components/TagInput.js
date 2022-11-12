import React, {useId, useState} from 'react'
import PropTypes from 'prop-types'

function TagInput({
    placeholder='',
    overrideClassName='',
    label='Default',
    onChange=oc=>oc,
    value,
    required=false,
    defaultTags=[],
    clearInput=ci=>ci,
    helperText=''
}) {

    const id = useId()
    const [tags, setTags] = useState(defaultTags||[])
    const [isKeyReleased, setIsKeyReleased] = useState(false)

    /**
     * Used to handle multiple input into tags (both insert and remove)
     * @param {context} e 
     */
    const onKeyDown = (e) => {
        const { key } = e
        const trimmedInput = value.trim()

        if (key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault()
            setTags(prevState => [...prevState, trimmedInput])
            clearInput()
        }

        if (key === 'Backspace' && !value.length && tags.length && isKeyReleased) {
            e.preventDefault()
            const copyOfTags = [...tags]
            copyOfTags.pop()
            setTags(copyOfTags)
        }

        setIsKeyReleased(false)
    }

    const onKeyUp = () => {
        setIsKeyReleased(true)
    }

    /**
     * Used to remove the tags from input memory
     * @param {integer} index 
     */
    const removeTag = (index) => setTags(prevState => prevState.filter((_, i) => i !== index))

  return (
    <div className='w-full flex flex-col items-center mb-3'>
        <label
            htmlFor={id}
            className='w-full text-left py-1 text-gray-700 text-sm'
        >
            {label} {required && (<span className='text-red-400'>*</span>)}
        </label>
        <div className={`${overrideClassName||''} bg-white border rounded w-full text-sm flex flex-row items-center`}>
            {tags?.map((tag, index) => (
                <div className='rounded bg-black text-white py-1 px-2 text-sm flex flex-row mx-1 items-center' key={tag}>
                    {tag} 
                    <svg onClick={() => removeTag(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer ml-1 w-4 h-4">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </div>
            ))}
            <input
                id={id}
                onChange={onChange}
                value={value}
                type='text'
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                className={`w-full bg-transparent p-3 outline-none focus:outline-none ${tags?.length && 'ml-2'}`}
            />
        </div>
        <p className='w-full text-xs italic text-gray-600 py-1 text-left'>
            {helperText}
        </p>
    </div>
  )
}

TagInput.PropTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    overrideClassName: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    tags: PropTypes.array,
    helperText: PropTypes.string,
}

export default TagInput