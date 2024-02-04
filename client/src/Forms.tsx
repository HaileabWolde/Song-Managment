import { useState } from "react";

interface IState {
    people: {
        Title: string,
        Artist: string,
        Album: string,
        Genre: string
    }
}
const Forms = ()=> {
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
  
    return (
        <div className="w-[30%]  bg-white px-4 pt-4 pb-6 flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-center">Creating A Song </h1>
            <form className="flex flex-col gap-4">
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