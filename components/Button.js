import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

function Button({
    children,
    onClick = oc => oc,
    overrideClassName='',
    variant='primary',
    isLink=false,
    linkHref='/',
    size='default'
}) {
  return (
    isLink ? (
        <Link href={linkHref}>
            <div
                className={`${overrideClassName||''} text-center rounded px-5 text-md ${size==='large'?'py-2':'py-1'} shadow ${variant==='outlined'?'border text-gray-800':variant==='secondary'?'bg-yellow-400 text-black font-medium':'bg-black text-white font-medium'}`}
            >
                {children}
            </div>
        </Link>
    ) : (
        <button
            className={`${overrideClassName||''} text-center rounded px-5 text-md ${size==='large'?'py-2':'py-1'} shadow ${variant==='outlined'?'border text-gray-800':variant==='secondary'?'bg-yellow-400 text-black font-medium':'bg-black text-white font-medium'}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
  )
}

Button.PropTypes = {
    overrideClassName: PropTypes.string,
    variant: PropTypes.string,
    isLink: PropTypes.bool,
    linkHref: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button