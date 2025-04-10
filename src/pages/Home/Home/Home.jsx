import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import PopularMenu from "../PopularMenu/PopularMenu"

const Home = () => {
  return (
    <div className="bg-white">
      <Banner/>
      <Category/>
      <PopularMenu/>
    </div>
  )
}

export default Home