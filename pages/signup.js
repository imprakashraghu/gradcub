import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import Brand from '../components/Brand'

function signup() {
  return (
    <div className='bg-gray-100 w-full h-screen flex flex-row items-center justify-between px-24'>
        <div className='w-1/2 flex flex-col items-start'>
            <h1 className='w-full text-6xl text-black text-left py-4 font-bold leading-tighter tracking-tighter'>
                It&apos;s not too late!
            </h1>
            <p className='mb-3 w-full text-gray-800 font-light text-left text-2xl py-2 leading-tighter'>
                Join now in seconds ⏱
            </p>
        </div>
        <div className='w-full flex flex-col items-center'>
            <div className='w-6/12 border rounded-lg shadow-lg bg-white flex flex-col items-center p-3 pb-7'>
                <Brand 
                    overrideClassName='py-4'
                />
                <div className='w-10/12 mt-5'>
                    <Button
                        size='large'
                        overrideClassName='flex flex-row items-center text-center justify-center'
                        isLink={true}
                        linkHref='/'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 mr-3' preserveAspectRatio="xMidYMid" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                        Continue with Google
                    </Button>
                </div>
                <p className='w-full text-gray-500 text-lg text-center py-2'>
                    or
                </p>
                <label
                    htmlFor='email' 
                    className='w-10/12 text-left py-1 text-gray-700 text-sm'>Email Address</label>
                <input 
                    id='email'
                    type='email'
                    className='bg-white border rounded w-10/12 p-3 text-sm outline-none focus:outline-none mb-3'
                />
                <label 
                    htmlFor='password'
                    className='w-10/12 text-left py-1 text-gray-700 text-sm'>Password</label>
                <input 
                    id='password'
                    type='password'
                    placeholder='Min 8 characters'
                    className='bg-white border rounded w-10/12 p-3 text-sm outline-none focus:outline-none mb-5'
                />
                <Button
                    overrideClassName='w-10/12 mb-5'
                    size='large'
                    variant='secondary'
                >
                    Create Account
                </Button>
                <p className='w-10/12 font-light px-5 text-center text-xs text-gray-600 mb-5'>
                    By creating an account you agree to our <Link href='/'><span className='text-yellow-600 hover:underline'>Terms of Service</span></Link> and <Link href='/'><span className='text-yellow-600 hover:underline'>Privacy Policy</span></Link>.
                </p>
                <p className='w-10/12 text-sm font-regular text-black text-center py-2'>
                    Already have an account? <Link href='/login'><span className='text-yellow-600 hover:underline'>Log in</span></Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default signup