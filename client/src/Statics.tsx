import { SignInStatics, SignInStart, SignInFailure } from "./redux/song/songslice";
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
interface SongStateONE {
    song: {
    totalSongs: null | any,
     Error: null | boolean | {},
     Loading: boolean,
     currentId: null | string,
     Statics: {
        totalSongs: number,
        totalArtists: number,
        totalAlbums: number,
        totalGenres: number,
        genresCount: {}[],
        artistSongsCount: {}[],
        artistAlbumsCount: {}[],
        AlbumCountSong: {}[]
     } 
    }
   }

const Statics = ()=>{
    
    const dispatch = useDispatch();
    const {Statics} = useSelector((state:SongStateONE)=> state.song)
    const { totalSongs,  totalArtists,  totalAlbums,
        totalGenres,
        genresCount,
        artistSongsCount,
        artistAlbumsCount,
        AlbumCountSong} = Statics
    useEffect(()=>{
        const fetchStatics = async()=> {
            const endpoint = 'http://localhost:5000/Songs/statics'

            try{
                dispatch(SignInStart());
                const res = await fetch(endpoint, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    }, 
                })
                const data = await res.json()

                if(data.success === false){
                    dispatch(SignInFailure(data.message))
                }
                else{
                    dispatch(SignInStatics(data))
                }
            }
            catch(error){
                console.log(error)
            }
        };
        fetchStatics();
    }, [])
    return (
        <div className="w-full flex justify-end">
            <div className="bg-white shadow-xl border mt-4 w-[35%] p-4 mr-4 rounded-lg">
                <h1>Hello Motherfucker</h1>
            </div>
        </div>
    )
}
export default Statics;