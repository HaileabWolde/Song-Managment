import {FaEdit, FaTrash} from 'react-icons/fa'
import {useDispatch } from 'react-redux'
import { SignInStart, SignInDelete, SignInFailure ,  SignInId} from './redux/song/songslice'
interface Nprops {
    song: {
      _id: string,
      Title: string,
      Artist: string,
      Album: string,
      Genre: string
    }
  }
const Card = ({ song }: Nprops)=> {
  const dispatch = useDispatch()
  const handleDelete = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    const endpoint = `http://localhost:5000/Songs/deleteSong/${song._id}`

    try {
      dispatch(SignInStart());
      const res = await fetch(endpoint, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json()
        console.log(data)
        if(data.success === false){
          dispatch(SignInFailure(data.message))
        }
        else{
          dispatch(SignInDelete(data._id))
        }
  }
  catch(error){
      console.log(error)
  }
  }
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    dispatch(SignInId(song._id))
  }
    return (
      <div className="flex flex-col gap-2 justify-center w-[40%] h-[40%] rounded-lg bg-white shadow-lg border px-4 my-2 cursor-pointer">
        <h1 className="font-serif font-semibold text-xl text-center"> {song.Title}</h1>
        <p><span className="font-semibold hover:underline">Artist:</span> {song.Artist}</p>
      <p><span className="font-semibold hover:underline">Album:</span> {song.Album}</p>
      <p><span className="font-semibold hover:underline">Genre:</span> {song.Genre}</p>
      <div className='w-full flex justify-between'>
        <button type="button" onClick={handleEdit}><FaEdit/></button>
        <button type='button' onClick={handleDelete}><FaTrash/></button>
      </div>
      </div>
    )
}
export default Card;