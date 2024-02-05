interface Nprops {
    song: {
      Title: string,
      Artist: string,
      Album: string,
      Genre: string
    }
  }
const Card = ({ song }: Nprops)=> {
    return (
      <div className="flex flex-col gap-2 justify-center w-[40%] h-[40%] rounded-lg bg-white shadow-lg border px-4 my-2 cursor-pointer">
        <h1 className="font-serif font-semibold text-xl text-center"> {song.Title}</h1>
        <p><span className="font-semibold hover:underline">Artist:</span> {song.Artist}</p>
      <p><span className="font-semibold hover:underline">Album:</span> {song.Album}</p>
      <p><span className="font-semibold hover:underline">Genre:</span> {song.Genre}</p>
      </div>
    )
}
export default Card;