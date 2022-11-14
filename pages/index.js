import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import heroImage from '../public/heroimg.png'

export default function Home() {
  return (
    <div>
      <Head>
          <meta charSet="UTF-8" />
          <title>Open Source Awareness Tool for Universities - Gradcub</title>
          <meta name="title" content="Open Source Awareness Tool for Universities - Gradcub" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <main className='w-full flex flex-row items-start justify-between px-24 py-10'>
        <div className='w-full flex flex-col items-start py-24'>
          <p className='w-full text-left text-yellow-500 font-bold text-lg'>The open source awareness tool</p>
          <h1 className='w-full text-6xl text-black text-left py-4 font-bold leading-tighter tracking-tighter'>
            Start exploring today and 
            <span className='pl-2 relative whitespace-nowrap'>
              <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-slate-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
              <span className='relative'>never <span className='text-yellow-500'>regret</span> later</span>
            </span>
          </h1>
          <p className='mb-3 w-full text-gray-800 font-light text-left text-2xl py-2 leading-tighter'>
            for graduate students and people who have will to start
          </p>
          <Button>
            Choose Your Path 👋
          </Button>
        </div>
        <div className='w-full flex flex-row py-24 ml items-start pl-10'>
          <Image
            src={heroImage}
            width={500}
            height={500}
            alt='hero-image'
            className='object-contain'
          />
        </div>
      </main>
      <section className='w-full h-full bg-yellow-500 px-24 py-10'>
        <h1 className='w-full text-6xl text-white text-center py-4 font-medium leading-tighter tracking-tighter mb-2'>
            what can  with 
            <span className="relative whitespace-nowrap">
              <svg ariaHidden="true" viewBox="0 0 281 40" class="absolute top-1/2 left-0 h-[1em] w-full fill-yellow-700" preserveAspectRatio="none"><path fillRule="evenodd" clipRule="evenodd" d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"></path></svg>
              <span className="relative mx-2">you do this</span>
            </span>
            tool ?
        </h1>
        <p className='mb-3 w-full text-white font-light text-center text-2xl py-2 leading-tighter'>
            this will guide you to the path you always dreamt of
        </p>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}
