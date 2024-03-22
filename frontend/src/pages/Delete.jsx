import {useState} from 'react'
import axios from 'axios'
import Spinner from '../components/spinner'
import Back from '../components/back'
import { useNavigate,useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Delete = () => {
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleDeleteBook=()=>{
    setLoading(true)
    axios.delete(`https://bookstore-yhcb.onrender.com/api/v1/books/${id}`)
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
      <h1 className='font-semibold italic decoration-dashed decoration-emerald-50 mt-5 text-3xl'>Delete Book</h1>
      <div className='flex flex-col border-8 bg-pink-700 items-center border-purple-500 border-dotted rounded-xl w-[600px] p-8 mx-auto'>
        <h2 className="text-2xl text-white font-bold">Are you sure?</h2>
        <button onClick={handleDeleteBook} type="submit" className="p-2 w-40 italic rounded-full bg-red-300 hover:bg-red-900">Yes, I am Sure </button>
      </div>
    </div>
  )
}

export default Delete