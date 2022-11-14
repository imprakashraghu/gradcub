import React, { use, useEffect, useState } from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import CheckInput from '../components/CheckInput'
import Header from '../components/Header'
import Input from '../components/Input'
import Select from '../components/Select'
import TagInput from '../components/TagInput'
import { useDataLayerValue } from '../DataLayer'
import { supabase } from '../config/supabase'
import toast from 'react-hot-toast'
import Footer from '../components/Footer'

function Choose() {

  const [tab, setTab] = useState(0)
  const [{ categories }, dispatch] = useDataLayerValue()

  const [input, setInput] = useState('')

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase.from('category').select('*')
        if (error) toast.error(error.message)
        dispatch({
          type: 'ADD_ALL_CATEGORIES',
          payload: data
        })
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchCategories()
  }, [])

  return (
    <div>
      <Head>
          <meta charSet="UTF-8" />
          <title>Helping you to chose your path - Gradcub</title>
          <meta name="title" content="Helping you to chose your path - Gradcub" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className='px-24 py-24'>
        <div className='max-w-5xl mx-auto bg-gray-200 h-full p-8 rounded flex items-center justify-center'>
          {
            tab === 0 ? (
              <div className='max-w-4xl w-full h-full bg-white border shadow rounded-lg flex p-6 flex-col items-start'>
                <div className='w-full grid grid-cols-2 gap-4 py-1'>
                  <Input 
                    label='First Name'
                    placeholder='Hemaprakash'
                    required
                  />
                  <Input 
                    label='Last Name'
                    placeholder='Raghu'
                    required
                  />
                </div>
                <div className='w-full grid grid-cols-2 gap-4 py-1'>
                  <Select 
                    label='Year of Study'
                    value={null}
                  >
                    <option selected disabled value={null}>Select Current Studying Year</option>
                    <option value='1'>1st Year</option>
                    <option value='2'>2nd Year</option>
                    <option value='3'>3rd Year</option>
                    <option value='4'>4th Year</option>
                  </Select>
                  <Input 
                    label='CGPA'
                    placeholder='8.34'
                    type='number'
                  />
                </div>
                <div className='w-full grid grid-cols-2 gap-4 py-1'>
                  <Input 
                    label='Email Address'
                    placeholder='prakashjaw05@gmail.com'
                    required
                    type='email'
                  />
                  <Select 
                    label='Department'
                    value={null}
                  >
                    <option selected disabled value={null}>What&apos;s your major</option>
                    <option value='cse'>Computer Science and Engineering</option>
                    <option value='aids'>Artificial Intelligence and DataStructures</option>
                    <option value='it'>Information Technology</option>
                    <option value='ece'>Electronics and Communication Engineering</option>
                  </Select>
              </div>
              <div className='w-full grid grid-cols-1 gap-4 py-1'>
                  <TagInput
                    label='Interested Technologies'
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    clearInput={() => setInput('')}
                    helperText='maximum of (6 technologies) are allowed'
                    placeholder='HTML, CSS, Python'
                    suggestionList={[{name:'HTML',key:'html'},{name:'CSS',key:'css'},{name:'Python',key:'python'}]}
                  />
              </div>
              <div className='w-full flex items-center py-2 justify-end'>
                <Button
                  onClick={() => setTab(1)}
                >
                  Next
                </Button>
              </div>
              </div> ) : tab === 2 ? (
                <div className='max-w-4xl w-full h-full bg-white border shadow rounded-lg flex p-6 flex-col items-start'>
                    <div className='w-full grid grid-cols-1 gap-4 py-1'>
                      <TagInput
                        label='Tools you already known ? 🛠'
                        helperText='maximum of (6 tools) are allowed'
                        placeholder='Git, Vscode'
                        suggestionList={[{name:'Git',key:'git'},{name:'Vscode',key:'vscode'},{name:'Photoshop',key:'photoshop'}]}
                      />
                    </div>
                    <div className='w-full grid grid-cols-2 gap-4 py-1'>
                      <Select 
                        label='Dream Company 😍'
                        value={null}
                      >
                        <option selected disabled value={null}>You must have one</option>
                        <option value='google'>Google</option>
                        <option value='amazon'>Amazon</option>
                        <option value='meta'>Meta</option>
                        <option value='tcs'>TCS</option>
                        <option value='cts'>CTS</option>
                        <option value='zoho'>Zoho</option>
                      </Select>
                      <Select 
                        label='Expected Salary 💰'
                        value={null}
                      >
                        <option selected disabled value={null}>How much do want to get paid?</option>
                        <option value='-4'>﹤ 4 Lakhs</option>
                        <option value='4-7'>4 to 7 Lakhs</option>
                        <option value='7-10'>7 to 10 Lakhs</option>
                        <option value='+10'>﹥ 10 Lakhs</option>
                        <option value='0'>I do not care about money</option>
                      </Select>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-4 py-1'>
                      <Select 
                        label='Future Plans 😉 (let&apos;s be honest)'
                        value={null}
                      >
                        <option selected disabled value={null}>What&apos;s on {new Date().getFullYear()+4}</option>
                        <option value='masters'>Masters</option>
                        <option value='startup'>Start a startup</option>
                        <option value='youtube'>Start YouTube Channel</option>
                        <option value='tcs'>TCS</option>
                        <option value='cts'>CTS</option>
                        <option value='zoho'>Zoho</option>
                      </Select>
                      <Select 
                        label='What is my Passion 🙂'
                        value={null}
                      >
                        <option selected disabled value={null}>What you love to do?</option>
                        <option value='search people'>Use Social Media</option>
                        <option value='photography'>Photography</option>
                        <option value='drawing'>Drawing</option>
                        <option value='solving problems'>Problem Solving</option>
                        <option value='play games'>Play Games</option>
                        <option value='nan'>Did not figured out yet</option>
                      </Select>
                  </div>
                  <div className='w-full grid grid-cols-1 gap-4 py-1'>
                      <TagInput 
                        label='I already have this ?'
                        placeholder='Laptop, Good Internet at home, Android Phone, Iphone, Macbook'
                        required
                        helperText='maximum of (6 items) are allowed'
                        suggestionList={[{name:'Laptop',key:'laptop'},{name:'Android Phone',key:'android-phone'},{name:'Iphone',key:'iphone'},{name:'wifi',key:'wifi'}]}
                      />
                  </div>
                  <div className='w-full flex flex-row items-center py-2 justify-end'>
                    <Button
                      onClick={() => setTab(1)}
                      variant='outlined'
                      overrideClassName='mr-2'>
                        Previous
                    </Button>
                    <Button
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : tab === 1 ? (
                <div className='max-w-4xl w-full h-full bg-white border shadow rounded-lg flex p-6 flex-col items-start'>
                    <div className='w-full grid grid-cols-1 gap-4 py-1'>
                      <CheckInput
                        label='Select all categories that you are interested'
                        values={categories}
                        displayKey='display_name'
                      />
                    </div>
                    <div className='w-full flex flex-row items-center py-2 justify-end'>
                      <Button
                        onClick={() => setTab(0)}
                        variant='outlined'
                        overrideClassName='mr-2'>
                          Previous
                      </Button>
                      <Button
                        onClick={() => setTab(2)}
                      >
                        Next
                      </Button>
                    </div>
                </div>
              ) : null
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Choose