import {React , useState} from 'react'
import BackBotton from '../components/BackBotton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function DeleteBooks() {
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true)
    axios
     .delete(`http://localhost:8000/books/${id}`)
     .then(() => {
      setLoading(false);
      enqueueSnackbar('Book Deleted Succesfully' , {variant : 'success'})
      navigate('/')
     })
     .catch((error) => {
      setLoading(false);
      // alert('An error happend , Please Check console');
      enqueueSnackbar('Error' , {variant : 'error'})
      console.log(error);
     })
  }

  return (
    <div className='p-4'>
      <BackBotton/>
       <h1 className='text-3xl my-4'>Delete Book</h1>
       {loading ? <Spinner/> : ''}
    <div className='flex felx-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
      <h3 className='text-2xl'>Are You Sure You Want to delete this</h3>

      <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}> 
        Yes,Delete it
      </button>
    </div>
      

    </div>
  )
}

export default DeleteBooks
