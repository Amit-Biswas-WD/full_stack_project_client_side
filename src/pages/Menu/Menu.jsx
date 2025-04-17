import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img1 from "../../../public/menu2/banner3.jpg"
import img2 from "../../../public/menu2/dessert-bg.jpeg"
import img3 from "../../../public/menu2/pizza-bg.jpg"
import img4 from "../../../public/menu2/salad-bg.jpg"
import img5 from "../../../public/menu2/soup-bg.jpg"

const items = [
  {
    id: 1,
    img : img1,
    title : "OUR MENU",
    description: "Would you like to try a dish?"
  },
  {
    id: 2,
    img : img2,
    title : "DESSERTS",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    img : img3,
    title : "PIZZA",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 4,
    img : img4,
    title : "SALADS",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 5,
    img : img5,
    title : "SOUPS",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
]

const Menu = () => {
  const coverItem = items[0];

  return (
    <div className="mt-20">
      <Helmet>
        <title>bisTro Boss || Menu</title>
        <meta name="description" content="This is the home page" />
      </Helmet>
      <Cover img={coverItem.img} title={coverItem.title} description={coverItem.description}/>
    </div>
  );
};

export default Menu;
