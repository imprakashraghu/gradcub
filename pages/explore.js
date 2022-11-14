import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import PathItem from '../components/PathItem'
import { supabase } from '../config/supabase'
import { toast } from 'react-hot-toast'
import { useDataLayerValue } from '../DataLayer'
import Footer from '../components/Footer'

function Explore() {

    const [loading, setLoading] = useState(false)
    const [{ paths, pathCacheExpiry }, dispatch] = useDataLayerValue()

    useEffect(() => {
        async function getPaths() {
            try {
                setLoading(true)
                const { data, error } = await supabase.from('paths').select('*,category(*),path_skills(skill_id(skill_name)))')
                if (error) toast.error(error.message||'Could not get paths')
                dispatch({
                    type: 'ADD_ALL_PATHS',
                    payload: data
                })
            } catch(error) {
                console.log(error.message);
            } finally {
                setLoading(false)
            }
        }
        if (pathCacheExpiry) {
            // already cached
            if (new Date().getTime() > new Date(pathCacheExpiry).getTime()) {
                getPaths()
            }
        } else {
            // first time
            getPaths()
        }
    }, [])

  return (
    <div className='bg-white min-h-screen'>
        <Head>
            <meta charSet="UTF-8" />
            <title>Explore what the world has for you - Gradcub</title>
            <meta name="title" content="Explore what the world has for you - Gradcub" />
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Header />
        <main className='w-full px-24 py-20'>
            <h1 className='w-full text-3xl text-black text-left py-4 font-bold leading-tighter tracking-tighter'>
               see what the world has for you
            </h1>
            <div className='w-full grid grid-cols-4 gap-4 py-4'>
                {/* PATH ITEM */}
                {
                    loading ? (
                        Array.from(new Array(8)).map((_,idx) => (
                            <PathItem key={idx} isLoading={true} />
                        ))
                    ) : (
                        paths?.map(({ id, title, short_description, category, slug, icon, path_skills }) => (
                            <PathItem
                                key={id}
                                title={title}
                                shortDescription={short_description}
                                category={category?.name}
                                slug={slug}
                                icon={icon}
                                skills={path_skills}
                            />
                        ))
                    )
                }
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Explore