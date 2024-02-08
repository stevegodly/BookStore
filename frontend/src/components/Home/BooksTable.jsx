import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-seperate border-spacing-5 border-slate-500'>
      <thead>
        <tr>
          <th className='bg-zinc-400 border border-slate-600 rounded-md font-bold'>NO</th>
          <th className='bg-zinc-400 border border-slate-600 rounded-md font-bold'>Title</th>
          <th className='bg-zinc-400 border border-slate-600 rounded-md font-bold'>Author</th>
          <th className='bg-zinc-400 border border-slate-600 rounded-md font-bold'>Published Year</th>
          <th className='bg-zinc-400 border border-slate-600 rounded-md font-bold'>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book,index) =>(
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center font-medium'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center font-medium'>
              {book.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center font-medium max-md:hidden'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center font-medium max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600'/>
                </Link>
                <Link to={`books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default BooksTable