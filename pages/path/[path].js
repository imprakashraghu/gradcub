import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Image from 'next/image'
import Button from '../../components/Button'
import { Tab } from '@headlessui/react'
import TechItem from '../../components/TechItem'
import axios from 'axios'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const data = {
    title:'Front End Developer',
    shortDescription:'Person who builds user interface for websites or mobile based on the requirement. Will be a part of a team where you convert designs into code.',
    category:'Web Development',
    icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
    interests: 0,
    explanatory_text: 'Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing. The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device), which requires careful planning on the side of the developer.',
    explanatory_video: '',
    technologies: [
        {name:'Javascript'},
        {name:'Python'},
        {name:'React'},
        {name:'Angular'},
        {name:'Vue'},
        {name:'Django'},
        {name:'HTML'},
        {name:'CSS'},
    ],
    helping_sites: [
        {url:'https://youtube.com/',title:'YouTube',image:'https://ictbyte.com/wp-content/uploads/2022/06/download-youtube-video.jpg'},
        {url:'https://udemy.com/',title:'Udemy',image:'https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png'},
        {url:'https://medium.com/',title:'Medium',image:'https://user-images.githubusercontent.com/36799589/96227773-3acc6080-0fb2-11eb-837f-f5026d472969.jpg'},
        {url:'https://dev.to/',title:'Dev Community',image:'https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png'},
        {url:'https://www.w3schools.com/',title:'W3 Schools',image:'https://www.w3schools.com/images/w3schools_logo_436_2.png'},
    ]
}

export default function Path() {

    const internalTabs = [
        {
            id: 1,
            tab_label: 'Overview',
        },
        {
            id: 2,
            tab_label: 'Technology',
        },
        {
            id: 3,
            tab_label: 'Insights'
        },
        {
            id: 4,
            tab_label: 'Helping Sites'
        },
    ]

  return (
    <div>
        <Header />
        <div className='px-24 py-10 flex flex-col items-start'>
            <div className='w-full flex flex-row items-start'>
                <div className='mr-5 w-24 h-24 mt-2'>
                    <Image
                        className='rounded'
                        src={data?.icon}
                        alt={data?.title}
                        width={300}
                        height={300}
                    />
                </div>
                <div className='w-full flex flex-col items-start'>
                    <h2
                        className='w-full text-left text-3xl font-bold text-black mb-1'
                    >
                        {data?.title}
                    </h2>
                    <div className='rounded-full text-black text-md flex items-center mb-3'>
                        {data?.category} <div className='mx-2 rounded-full w-1 h-1 bg-gray-700'></div> {data?.interests} people are interested
                    </div>
                    <Button
                        overrideClassName='flex flex-row items-center'
                        variant='secondary'
                    >
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4 mr-2">
                            <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        I&apos;m Interested
                    </Button>
                </div>
            </div>
            <div className="w-full px-2 py-8 sm:px-0">
                <Tab.Group>
                    <Tab.List className="max-w-md flex space-x-1 rounded-xl bg-white p-1">
                    {internalTabs.map(({id,tab_label}) => (
                        <Tab
                        key={id}
                        className={({ selected }) =>
                            classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-500 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-yellow-400 shadow'
                                : 'text-black hover:bg-white/[0.12]'
                            )
                        }
                        >
                        {tab_label}
                        </Tab>
                    ))}
                    </Tab.List>
                    <Tab.Panels className="w-full mt-2">
                        <Tab.Panel
                            key='1'
                            className={classNames(
                                'w-full p-3',
                                ''
                            )}>
                            <div className='w-full flex flex-row items-start justify-between'>
                                <div className='w-1/2 flex flex-col items-start'>
                                    <p className='w-full text-justify text-black text-md border-b pb-3'>
                                        {data?.shortDescription}
                                    </p>
                                    <p className='w-full text-justify text-black text-md border-b py-3'>
                                        {data?.explanatory_text}
                                    </p>
                                </div>
                                <div className='bg-white rounded shadow p-2 flex text-sm flex-col items-center'>
                                    <p className='w-full py-1 text-black font-light italic flex items-center mb-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 w-5 h-5">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                                        </svg>
                                        Suggested video based on the current content
                                    </p>
                                    <iframe width="500" height="315" src="https://www.youtube.com/embed/qyHyFsT7Hig" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel
                            key='2'
                            className={classNames(
                                'w-full p-3',
                                ''
                            )}>
                            <div className='w-1/3 grid grid-cols-4 gap-2'>
                                {
                                    data?.technologies?.map(({name}) => (
                                        <TechItem
                                            key={name}
                                            name={name}
                                        />
                                    ))
                                }
                            </div>
                        </Tab.Panel>
                        <Tab.Panel
                            key='3'
                            className={classNames(
                                'w-full p-3',
                                ''
                            )}
                        >

                        </Tab.Panel>
                        <Tab.Panel
                            key='4'
                            className={classNames(
                                'w-full p-3 py-6',
                                ''
                            )}>
                            <div className='w-full grid grid-cols-10 gap-4'>
                                {
                                    data?.helping_sites?.map(item => (
                                        <div
                                            key={item?.title}  
                                            className='cursor-pointer flex flex-col items-center'>
                                            <div
                                                className='w-20 h-20 flex bg-white shadow-sm rounded-xl'>
                                                <Image
                                                    alt={item?.title}
                                                    width={300}
                                                    height={300}
                                                    src={item?.image}
                                                    className='rounded-xl object-cover'
                                                />
                                            </div>
                                            <p className='w-full text-center py-2 text-md text-black font-medium'>
                                                {item?.title}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    </div>
  )
}
