import Cover from "../Shared/Cover/Cover";
import coverImg from "../../../public/ourShop/banner2.jpg";
import FilterCategory from "../Shared/FilterCategory/FilterCategory";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import OrderShop from "./OrderShop/OrderShop";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const OurShop = () => {
  const categories = ["popular", "pizza", "salad", "dessert", "soup"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [popularMenu, pizzaMenu, saladMenu, dessertMenu, soupMenu] =
    FilterCategory();

  return (
    <div>
      <Helmet>
        <title>bisTro Boss || Our Shop</title>
      </Helmet>
      <div>
        <Cover
          img={coverImg}
          title={"OUR SHOP"}
          description={"Would you like to try a dish?"}
        />
      </div>
      <div className="container mx-auto my-6">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Popular</Tab>
            <Tab>Pizza</Tab>
            <Tab>Salad</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
          </TabList>

          <TabPanel>
            <OrderShop item={saladMenu} />
          </TabPanel>
          <TabPanel>
            <OrderShop item={popularMenu} />
          </TabPanel>
          <TabPanel>
            <OrderShop item={dessertMenu} />
          </TabPanel>
          <TabPanel>
            <OrderShop item={pizzaMenu} />
          </TabPanel>
          <TabPanel>
            <OrderShop item={soupMenu} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
