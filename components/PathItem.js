import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

function PathItem({
    title,
    shortDescription,
    category,
    interests=0,
    icon,
    slug,
    isLoading=false,
    skills=[]
}) {
  return (
    <>
    {
        !isLoading ? (
        <Link href={`/path/${slug}`}>
            <div className='w-full border rounded bg-white shadow p-2 flex flex-col items-center hover:shadow-lg' style={{ maxHeight: 180, minHeight: 160 }}>
                <div className='w-full flex flex-row items-start'>
                    <div className='mr-2 w-20 h-20'>
                        {
                            icon ? (
                                <Image
                                    className='rounded'
                                    src={icon}
                                    alt={title}
                                    width={300}
                                    height={300}
                                />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#d8d8ff" d="M13.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/><path fill="#b2b1ff" d="M19 2H5a3.009 3.009 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887.888-.888a3.008 3.008 0 0 1 4.242 0L22 15.86V5a3.009 3.009 0 0 0-3-3zm-5.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/><path fill="#6563ff" d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.009 3.009 0 0 0 3 3h14c.815 0 1.595-.333 2.16-.92L10.12 9.98z"/><path fill="#d8d8ff" d="m22 15.858-3.879-3.879a3.008 3.008 0 0 0-4.242 0l-.888.888 8.165 8.209c.542-.555.845-1.3.844-2.076v-3.142z"/></svg>
                            )
                        }
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <h2
                            className='cursor-pointer  leading-tight hover:underline text-left text-lg font-medium text-black mb-1'
                        >
                            {title}
                        </h2>
                        <div className='rounded-full whitespace-nowrap text-ellipsis overflow-hidden text-black text-xs flex items-center'>
                            {category} <div className='mx-2 rounded-full w-1 h-1 bg-gray-700'></div> {interests} Interested
                        </div>
                    </div>
                </div>
                <p className='line-clamp-3 text-justify text-sm text-black font-light'>
                    {shortDescription}
                </p>
                {/* <div className='flex flex-row items-center py-1 overflow-x-auto w-full '>
                    {skills?.map((item) => (
                        <span key={item?.skill_id?.skill_name} className='bg-gray-300 mr-1 text-black rounded text-xs px-2 py-1'>{item?.skill_id?.skill_name}</span>
                    ))}
                </div> */}
            </div>
        </Link> 
    ):(
        <div class='w-full rounded bg-white shadow p-4'>
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-300 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-300 rounded"></div>
                <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-300 rounded"></div>
                </div>
                </div>
            </div>
        </div>
    )
    }
    </>
  )
}

PathItem.PropTypes = {
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    interests: PropTypes.number,
    icon: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export default PathItem