import {useState} from 'react'
import axios from 'axios'
import Spinner from '../components/spinner'
import Back from '../components/back'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const Create = () => {
  const [loading,setLoading]=useState(false)
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [year,setYear]=useState('')
  const navigate=useNavigate()
  const { enqueueSnackbar } = useSnackbar();


  const handleSaveBook=()=>{
    setLoading(true)
    const data={
      title:title,
      author:author,
      publishYear:year,
    }
    axios.post('http://localhost:5000/api/v1/books',data)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar('Book Created successfully', { variant: 'success' });
      navigate('/')
    })
    .catch((err)=>{
      setLoading(false)
      enqueueSnackbar('Book Is Not Created ', { variant: 'error' });
      console.log(err);
      
    })
  }
  return (
    <div className='p-4 bg-gradient-to-r from-cyan-400 to-violet-800 h-screen'>
      {loading?(<Spinner/>) :''}
      <Back/>
      <h1 className='font-semibold italic decoration-dashed decoration-emerald-50 mt-5 text-3xl'>Add A Book</h1>
      <div className='flex flex-col border-3 border-blue-300 mt-7'>
        <label className='text-gray-200 font-extrabold'> Title </label>
        <input type="text" value={title}
          onChange={(e) => setTitle(e.target.value)} placeholder='Title...' className='border border-gray-300 bg-slate-400 px-4 py-2 w-6/12 placeholder-white'/>
        <label className='text-gray-200 font-extrabold'> Author </label>
        <input type="text" value={author}
          onChange={(e) => setAuthor(e.target.value)} placeholder='Author...' className='border border-gray-300 bg-slate-400 px-4 py-2 w-6/12 placeholder-white'/>
        <label className='text-gray-200 font-extrabold'> Published Year</label>
        <input type="number" value={year}
          onChange={(e) => setYear(e.target.value)} placeholder='Year...' className='border border-gray-300 bg-slate-400 px-4 py-2 w-6/12 placeholder-white'/>
      </div>
      <button className='p-2 w-24 italic rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mt-4' onClick={handleSaveBook}>
        Save
      </button>
    </div>
  )
}

export default Create