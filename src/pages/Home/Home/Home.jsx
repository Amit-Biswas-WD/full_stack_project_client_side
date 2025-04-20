import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>bisTro Boss || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
    </div>
  );
};

export default Home;
