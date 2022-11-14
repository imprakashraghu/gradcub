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
        <div className='bg-white bg-opacity-50  backdrop-blur shadow fixed w-full flex flex-row items-center py-4 px-24 justify-between z-20'>
            <Brand />
            <div className='w-full flex items-end justify-end'>
                <div className='flex flex-row items-center'>
                    <Link href='/explore'>
                        <p className={`text-black font-medium text-center mx-2 px-2 py-1 rounded hover:bg-gray-200`}>Explore</p>
                    </Link>
                    <Link href='/choose'>
                        <p className={`text-black font-medium text-center mx-2 px-2 py-1 rounded hover:bg-gray-200`}>Choose Path</p>
                    </Link>
                </div>
                <div className='flex items-center'>
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
                </div>
            </div>
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