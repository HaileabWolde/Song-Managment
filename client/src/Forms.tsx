const Forms = ()=> {
    return (
        <div className="w-[30%] bg-white p-4 flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-center">Creating A Song </h1>
            <form className="w-[90%] mx-auto flex flex-col gap-4">
                <input
                type="text"
                placeholder="Add Song Name"
                className="p-5 bg-white rounded-lg shadow-xl w-full border text-sm"
                />
                 <input
                type="text"
                placeholder="Add The Name of The Artist"
                className="p-5 bg-white rounded-lg shadow-xl w-full border text-sm"
                />
                 <input
                type="text"
                placeholder="Add The Name of The Album"
                className="p-5 bg-white rounded-lg shadow-xl w-full border text-sm"
                />
                 <input
                type="text"
                placeholder="Add Genre Type"
                className="p-5 bg-white rounded-lg shadow-xl w-full border text-sm"
                />

            </form>
        </div>
    )
}
export default Forms;