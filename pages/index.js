import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Header from '../components/Header'
import heroImage from '../public/heroimg.png'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <main className='w-full flex flex-row items-start justify-between px-24'>
        <div className='w-full flex flex-col items-start py-24'>
          <h1 className='w-full text-6xl text-black text-left py-4 font-bold leading-tighter tracking-tighter'>
            Start exploring today and never regret later
          </h1>
          <p className='mb-3 w-full text-gray-800 font-light text-left text-2xl py-2 leading-tighter'>
            for graduate students and people who have will to start
          </p>
          <Button>
            Choose Your Path 👋
          </Button>
        </div>
        <div className='w-full flex flex-row py-24 ml items-start pl-10 relative'>
          <Image
            src={heroImage}
            width={500}
            height={500}
            alt='hero-image'
            className='object-contain'
          />
        </div>
      </main>
    </div>
  )
}
