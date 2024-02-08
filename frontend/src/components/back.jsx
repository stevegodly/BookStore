import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const back = ({destination='/'}) => {
  return (
    <div className='flex justify-center items-center bg-green-200 rounded-3xl mt-3 py-2 w-16 hover:bg-cyan-600'>
        <Link to={destination}>
            <BsArrowLeft className='text-4xl text-gray-950 font-extrabold'/>
        </Link>
    </div>
  )
}

export default back;