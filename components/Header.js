import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Brand from './Brand'
import Button from './Button'
import toast, { Toaster } from 'react-hot-toast'

function Header() {

    const router = useRouter()

  return (
    <>
        <div className='w-full flex flex-row items-center py-5 px-24 justify-center'>
            <Brand />
            <div className='flex flex-row items-center'>
                <Link href='/explore'>
                    <p className={`text-black font-medium text-center mx-3 mb-1 ${router.pathname==='/explore'?'mb-0':'py-2'}`}>Explore</p>
                    <div className={`${router.pathname==='/explore'?'block':'hidden'} w-9/12 mx-auto h-1 bg-black border`}></div>
                </Link>
                <Link href='/choose'>
                    <p className={`text-black font-medium text-center mx-3 mb-1 ${router.pathname==='/choose'?'mb-0':'py-2'}`}>Choose Path</p>
                    <div className={`${router.pathname==='/choose'?'block':'hidden'} w-9/12 mx-auto h-1 bg-black border`}></div>
                </Link>
                {/* <span className='text-gray-800 px-4 text-lg'>|</span> */}
            </div>
            {/* <div className='flex items-center'>
                <Button
                overrideClassName='mx-2'
                isLink={true}
                linkHref='/login'
                >
                    Log in
                </Button>
                <Button
                    variant='secondary'
                    overrideClassName='mx-2'
                    isLink={true}
                    linkHref='/signup'
                >
                    Join gradcub
                </Button>
            </div> */}
        </div>
        <Toaster
            position='bottom-right'
            toastOptions={{
                success: {
                    style: {
                        background: 'black',
                        color: 'white'
                    },
                },
                error: {
                    style: {
                        background: 'black',
                        color: 'white'
                    },
                },
            }}
        />
    </>
  )
}

export default Header