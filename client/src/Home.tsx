import Cards from "./Cards"
import Forms from "./Forms"
const Home = ()=> {
    return (
        <div className="w-[70%] mx-auto flex justify-between gap-4">
          <Cards/>
          <Forms/>
        </div>
    )
}
export default Home