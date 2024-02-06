import {FaEdit, FaTrash} from 'react-icons/fa'
import { DeleteStart, SignInId} from './redux/song/songslice'
import {useDispatch } from 'react-redux'
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

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    dispatch(DeleteStart(song._id))
    
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