import useMenu from "../../../hooks/useMenu";

const FilterCategory = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const soupMenu = menu.filter((item) => item.category === "soup");
  return [popularMenu, pizzaMenu, saladMenu, dessertMenu, soupMenu];
};

export default FilterCategory;
