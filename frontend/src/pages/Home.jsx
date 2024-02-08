import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/spinner'
import {Link} from 'react-router-dom'
import BooksTable from '../components/Home/BooksTable';
import BooksCard from '../components/Home/BookCard';

import {MdOutlineAddBox} from 'react-icons/md'

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading,setLoading] = useState(false)
  const [showType, setShowType] = useState('table');

  useEffect(()=>{
    setLoading(true)
    axios.get('http://localhost:5000/api/v1/books').then((res)=>{
      setBooks(res.data)
      setLoading(false)
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  },[])
  return (
    <div className='p-4 bg-gradient-to-r from-emerald-300 to-violet-500 h-screen'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-violet-300 custom-width custom-height hover:bg-violet-800 px-8 py-2 rounded-lg text-3xl italic ring-offset-purple-500' onClick={()=>setShowType('table')}>
          Table
        </button>
        <button className='bg-teal-300 custom-width custom-height hover:bg-teal-800 px-8 py-2 rounded-lg text-3xl italic ring-offset-purple-500' onClick={()=>setShowType('Card')}>
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {loading?(<Spinner/>)
        : (showType==='table' ? (<BooksTable books={books}/>)
          : (<BooksCard books={books}/>))
      } 
    </div>
  )
}

export default Home