import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignInStart} from "./redux/song/songslice";
import Card from "./Card";
interface SongStateONE {
 song: {
  AllSongs: null | any,
  Error: null | boolean | {},
  Loading: boolean
 }
}

interface Song {
  _id: string,
  Title: string,
  Artist: string,
  Album: string,
  Genre: string
}
const Cards = () => {
  const dispatch = useDispatch();
  const { AllSongs, Loading } = useSelector((state: SongStateONE) => state.song);
 
  
  useEffect(() => {
    dispatch(SignInStart());
       
  }, [dispatch]);

  return (
    <div className="w-[60%] flex justify-between flex-wrap">
      {
        AllSongs && AllSongs.length > 0 ? (
          AllSongs.map((song: Song)=> (
            <Card song={song} key={song.Title}/>
          ))
        ): null
      }
    </div>
  );
};

export default Cards;