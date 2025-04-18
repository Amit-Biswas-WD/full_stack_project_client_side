import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img1 from "../../../public/menu2/banner3.jpg";
import img2 from "../../../public/menu2/dessert-bg.jpeg";
import img3 from "../../../public/menu2/pizza-bg.jpg";
import img4 from "../../../public/menu2/salad-bg.jpg";
import img5 from "../../../public/menu2/soup-bg.jpg";
import { useEffect, useState } from "react";
import PopularMenuCopy from "../Home/PopularMenu/PopularMenuCopy";

const items = [
  {
    id: 1,
    img: img1,
    title: "OUR MENU",
    description: "Would you like to try a dish?",
  },
  {
    id: 2,
    img: img2,
    title: "DESSERTS",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    img: img3,
    title: "PIZZA",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    img: img4,
    title: "SALADS",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    img: img5,
    title: "SOUPS",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Menu = () => {
  const [popularMenu, setPopularMenu] = useState([]);
  const [pizzaMenu, setPizzaMenu] = useState([]);
  const [saladMenu, setSaladMenu] = useState([]);
  const [dessertMenu, setDessertMenu] = useState([]);
  const [soupMenu, setSoupMenu] = useState([]);

  const coverItem1 = items[0];
  const coverItem2 = items[1];
  const coverItem3 = items[2];
  const coverItem4 = items[3];
  const coverItem5 = items[4];

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setPopularMenu(data.filter((item) => item.category === "popular"));
        setPizzaMenu(data.filter((item) => item.category === "pizza"));
        setSaladMenu(data.filter((item) => item.category === "salad"));
        setDessertMenu(data.filter((item) => item.category === "dessert"));
        setSoupMenu(data.filter((item) => item.category === "soup"));
      });
  }, []);

  return (
    <div className="mt-16">
      <Helmet>
        <title>bisTro Boss || Menu</title>
        <meta name="description" content="This is the home page" />
      </Helmet>
      <Cover
        img={coverItem1.img}
        title={coverItem1.title}
        description={coverItem1.description}
      />
      <PopularMenuCopy items={popularMenu} />
      <Cover
        img={coverItem2.img}
        title={coverItem2.title}
        description={coverItem2.description}
      />
      <PopularMenuCopy items={pizzaMenu} />
      <Cover
        img={coverItem3.img}
        title={coverItem3.title}
        description={coverItem3.description}
      />
      <PopularMenuCopy items={saladMenu} />
      <Cover
        img={coverItem4.img}
        title={coverItem4.title}
        description={coverItem4.description}
      />
      <PopularMenuCopy items={dessertMenu} />
    </div>
  );
};

export default Menu;
