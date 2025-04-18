import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img1 from "../../../public/menu2/banner3.jpg";
import img2 from "../../../public/menu2/dessert-bg.jpeg";
import img3 from "../../../public/menu2/pizza-bg.jpg";
import img4 from "../../../public/menu2/salad-bg.jpg";
import img5 from "../../../public/menu2/soup-bg.jpg";
// import { useEffect, useState } from "react";
import PopularMenuCopy from "../Home/PopularMenu/PopularMenuCopy";
import useMenu from "../../hooks/useMenu";

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
      "Desserts can be defined as a usually sweeter course that concludes a meal. This definition includes a range of courses ranging from fruits or dried nuts to multi-ingredient cakes and pies.",
  },
  {
    id: 3,
    img: img3,
    title: "PIZZA",
    description:
      "Pizza is a popular Italian dish consisting of a flat bread base topped with various ingredients like tomato sauce, cheese, and other toppings, baked at a high temperature.",
  },
  {
    id: 4,
    img: img4,
    title: "SALADS",
    description:
      "What Is Pizza Salad? Pizza salad is what happens when you take all the best pizza toppings and use lettuce (as opposed to crust) as a vehicle to get those toppings from plate to mouth.",
  },
  {
    id: 5,
    img: img5,
    title: "SOUPS",
    description:
      "According to food historian Ian Crofton in his book archaeologists in the Middle East found evidence of soup containing hippo bones dating to around 6,000 BCE. ",
  },
];

const Menu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const soupMenu = menu.filter((item) => item.category === "soup");

  const coverItem1 = items[0];
  const coverItem2 = items[1];
  const coverItem3 = items[2];
  const coverItem4 = items[3];
  const coverItem5 = items[4];

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPopularMenu(data.filter((item) => item.category === "popular"));
  //       setPizzaMenu(data.filter((item) => item.category === "pizza"));
  //       setSaladMenu(data.filter((item) => item.category === "salad"));
  //       setDessertMenu(data.filter((item) => item.category === "dessert"));
  //       setSoupMenu(data.filter((item) => item.category === "soup"));
  //     });
  // }, []);

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
      <PopularMenuCopy items={popularMenu} goLink={`/popularMenu`} />
      <Cover
        img={coverItem2.img}
        title={coverItem2.title}
        description={coverItem2.description}
      />
      <PopularMenuCopy items={pizzaMenu} goLink={`/pizzaMenu`} />
      <Cover
        img={coverItem3.img}
        title={coverItem3.title}
        description={coverItem3.description}
      />
      <PopularMenuCopy items={saladMenu} goLink={`/saladMenu`} />
      <Cover
        img={coverItem4.img}
        title={coverItem4.title}
        description={coverItem4.description}
      />
      <PopularMenuCopy items={dessertMenu} goLink={`/dessertMenu`} />
      <Cover
        img={coverItem4.img}
        title={coverItem4.title}
        description={coverItem4.description}
      />
      <PopularMenuCopy items={dessertMenu} goLink={`/dessertMenu`} />
      <Cover
        img={coverItem5.img}
        title={coverItem5.title}
        description={coverItem5.description}
      />
      <PopularMenuCopy items={soupMenu} goLink={`/soupMenu`} />
    </div>
  );
};

export default Menu;
