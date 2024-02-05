import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignInStart, SignInCreate, SignInFailure } from "./redux/song/songslice";
interface IState {
    people: {
        Title: string,
        Artist: string,
        Album: string,
        Genre: string
    }
}
const Forms = ()=> {
    const dispatch = useDispatch();
    const [formdata, setFormData] = useState<IState["people"]>({
        Title: "",
        Artist: "",
        Album: "",
        Genre: ''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        setFormData({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const endpoint = 'http://localhost:5000/Songs/createSong'

    try {
        dispatch(SignInStart());
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
          });
          const data = await res.json()
          console.log(data)
          if(data.success === false){
            dispatch(SignInFailure(data.message))
          }
          else{
            dispatch(SignInCreate(data.result))
          }
    }
    catch(error){
        console.log(error)
    }
  }
    return (
        <div className="w-[30%]  bg-white px-4 pt-4 pb-6 flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-center">Creating A Song </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                type="text"
                placeholder="Add Song Name"
                className="p-5 bg-white rounded-lg shadow-xl w-full border text-sm outline-none"
                value={formdata.Title}
                name="Title"
                onChange={handleChange}
                />
                 <input
                type="text"
                placeholder="Add The Name of The Artist"
                className="p-5 bg-white rounded-lg shadow-xl w-full border text-sm outline-none"
                value={formdata.Artist}
                name="Artist"
                onChange={handleChange}
                />
                 <input
                type="text"
                placeholder="Add The Name of The Album"
                className="p-5 bg-white rounded-lg shadow-xl w-full border text-sm outline-none"
                name="Album"
                value={formdata.Album}
                onChange={handleChange}
                />
                 <input
                type="text"
                placeholder="Add Genre Type"
                className="p-5 bg-white rounded-lg shadow-xl w-full border text-sm outline-none"
                value={formdata.Genre}
                name="Genre"
                onChange={handleChange}
                />
                <button
                type="submit"
                className="p-2 font-bold text-white bg-[#313bac]"
               
                >
                    SUBMIT
                </button>
                <button
                className="p-2 bg-[#FF0000] text-white bg-opacity-70"
                >
                    CLEAR
                </button>
            </form>
        </div>
    )
}
export default Forms;