import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import PathItem from '../components/PathItem'
import { supabase } from '../config/supabase'
import { toast } from 'react-hot-toast'
import { useDataLayerValue } from '../DataLayer'

function Explore() {

    const [loading, setLoading] = useState(false)
    const [{ paths, pathCacheExpiry }, dispatch] = useDataLayerValue()

    useEffect(() => {
        async function getPaths() {
            try {
                setLoading(true)
                const { data, error } = await supabase.from('paths').select('*,category(*)')
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
                // getPaths()
            }
        } else {
            // first time
            // getPaths()
        }
    }, [])

  return (
    <div className='bg-gray-100 min-h-screen'>
        <Header />
        <main className='w-full px-24 py-10'>
            <h1 className='w-full text-3xl text-black text-left py-4 font-bold leading-tighter tracking-tighter border-b pb-3'>
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
                        paths?.map(({ id, title, short_description, category, slug, icon }) => (
                            <PathItem
                                key={id}
                                title={title}
                                shortDescription={short_description}
                                category={category?.name}
                                slug={slug}
                                icon={icon}
                            />
                        ))
                    )
                }
            </div>
        </main>
    </div>
  )
}

export default Explore