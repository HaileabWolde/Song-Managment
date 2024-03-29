import {ListGroup, ListGroupItem} from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  StaticsStart } from "./redux/song/songslice";
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
interface SongStateONE {
    song: {
    totalSongs: null | any,
     Error: null | boolean | {},
     Loading: boolean,
     currentId: null | string,
     AllSongs:{}
     Statics: {
        totalSongs: number,
        totalArtists: number,
        totalAlbums: number,
        totalGenres: number,
        genresCount: {
            _id: string,
            count: number
        }[],
        artistSongsCount: {
            _id: string,
            totalSongs: number
        }[],
        artistAlbumsCount: {
            _id: string,
            totalAlbums: number
        }[],
        AlbumCountSong: {
            _id: string,
            totalSongs: number
        }[]
     } 
    }
   }

const Statics = ()=>{
    
    const dispatch = useDispatch();
    const { Statics,  AllSongs } = useSelector((state: SongStateONE) => state.song);
    const {
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      genresCount,
      artistSongsCount,
      artistAlbumsCount,
      AlbumCountSong,
    } = Statics || {}; // Add default empty object if Statics is null
  
    useEffect(() => {
      dispatch(StaticsStart());
    }, [dispatch, AllSongs]);
   
    return (
      <div className="w-full flex justify-end">
        <div className="bg-white shadow-xl border mt-2 w-[35%] p-4 mr-4 rounded-lg">
          <h1 className="text-center text-xl font-bold mb-2 font-serif">Overall Statics</h1>
  
          <ListGroup variant="flush flex flex-col gap-2">
            <ListGroupItem className="border p-2">
              <span className="font-serif font-semibold">Total Number of Songs: </span>
              {totalSongs}
            </ListGroupItem>
            <ListGroupItem className="border p-2">
              <span className="font-serif font-semibold">Total Number of Artists: </span>
              {totalArtists}
            </ListGroupItem>
            <ListGroupItem className="border p-2">
              <span className="font-serif font-semibold">Total Number of Albums: </span>
              {totalAlbums}
            </ListGroupItem>
            <ListGroupItem className="border p-2">
              <span className="font-serif font-semibold">Total Number of Genres: </span>
              {totalGenres}
            </ListGroupItem>
          </ListGroup>
  
          {genresCount && genresCount.length > 0 ? (
            <TableContainer className="mt-4 shadow-lg border" component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <h1 className="text-lg font-serif font-semibold">Genre</h1>
                    </TableCell>
                    <TableCell align="right">
                      <h1 className="text-lg font-serif font-semibold">Number of Songs</h1>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {genresCount.map((genre) => (
                    <TableRow key={genre._id}>
                      <TableCell>
                        <h1 className="text-sm font-serif">{genre._id}</h1>
                      </TableCell>
                      <TableCell align="right">
                        <h1 className="text-sm font-semibold font-sans">{genre.count}</h1>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
  
        {
            artistSongsCount && artistSongsCount.length > 0 ? (
                <TableContainer className='mt-4 shadow-lg border' component={Paper}>
                <Table   aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1 className='text-lg font-serif font-semibold'>Artist</h1></TableCell>
            <TableCell align="right"><h1 className='text-lg font-serif font-semibold'>Total Songs</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artistSongsCount.map((artist) => (
            <TableRow
              key={artist._id}
            >
              
              <TableCell ><h1 className='text-sm  font-serif'>{artist._id}</h1></TableCell>
              <TableCell align="right"><h1 className='text-sm font-semibold font-sans'>{artist.totalSongs}</h1></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            ): null
        }
        {
            artistAlbumsCount && artistAlbumsCount.length > 0 ? (
                <TableContainer className='mt-4 shadow-lg border' component={Paper}>
                <Table   aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1 className='text-lg font-serif font-semibold'>Album</h1></TableCell>
            <TableCell align="right"><h1 className='text-lg font-serif font-semibold'>Total Songs</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AlbumCountSong.map((Album) => (
            <TableRow
              key={Album._id}
            >
              
              <TableCell ><h1 className='text-sm  font-serif'>{Album._id}</h1></TableCell>
              <TableCell align="right"><h1 className='text-sm font-semibold font-sans'>{Album.totalSongs}</h1></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            ): null
        }
        </div>
      </div>
    );
}
export default Statics;