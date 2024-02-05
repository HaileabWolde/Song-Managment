import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignInStart, SignInSuccess, SignInFailure } from "./redux/song/songslice";
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
    const fetchAllSongs = async () => {
      const endpoint = 'http://localhost:5000/Songs/AllSong';

      try {
        dispatch(SignInStart());
        const res = await fetch(endpoint, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        if(data.success === false){
          dispatch(SignInFailure(data.message));
        }
        else{
          dispatch(SignInSuccess(data));
        }
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllSongs();
  }, []);

  return (
    <div className="w-[60%] flex justify-between flex-wrap">
      {
        AllSongs.map((song: Song)=> (
          <Card song={song} key={song.Title}/>
        ))
      }
    </div>
  );
};

export default Cards;