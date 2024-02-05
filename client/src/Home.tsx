import Cards from "./Cards"
import Forms from "./Forms"
import Statics from "./Statics"
const Home = ()=> {
    return (
        <div className="w-full ">
          <div className="w-[70%] mx-auto flex justify-between gap-4">
          <Cards/>
          <Forms/>
          </div>
          <Statics/>
          
        </div>
    )
}
export default Home