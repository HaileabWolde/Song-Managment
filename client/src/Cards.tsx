import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignInStart, SignInSuccess } from "./redux/song/songslice";

interface SongStateONE {
 song: {
  AllSongs: null | any,
  Error: null | boolean | {},
  Loading: boolean
 }
}
const Cards = () => {
  const dispatch = useDispatch();
  const { AllSongs, Loading } = useSelector((state: SongStateONE) => state.song);
 
  console.log(Loading);
  console.log(AllSongs);
  
  
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
        dispatch(SignInSuccess(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllSongs();
  }, []);

  return (
    <div className="w-[60%]">
      <h1>Hello Motherfucker</h1>
    </div>
  );
};

export default Cards;