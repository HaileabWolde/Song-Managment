import { useState } from "react"
import {useDispatch } from "react-redux"
import { SearchStart} from "./redux/song/songslice"
import Cards from "./Cards"
import Forms from "./Forms"
import Statics from "./Statics"
const Home = ()=> {
  const dispatch = useDispatch()
  const [searchInfo, setSearchInfo] = useState<string>('')

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      if(searchInfo){
        dispatch(SearchStart(searchInfo))
      }
      
  }
    return (
        <div className="w-full ">
          <div className="w-[25%] mx-auto mb-4 flex">
              <input
              type="text"
              placeholder="Search By Title, Album, Song or Genre"
              className="p-2 bg-white rounded-l-lg shadow-xl w-full border text-sm outline-none"
              value={searchInfo}
              onChange={(e)=> setSearchInfo(e.target.value)}
              />
              <button
                className="p-2 font-bold text-white bg-[#313bac] rounded-r-lg"
                onClick={handleEdit}
              >
                Search
              </button>
          </div>
          <div className="w-[70%] mx-auto flex justify-between gap-4">
          <Cards/>
          <Forms/>
          </div>
          <Statics/>
          
        </div>
    )
}
export default Home