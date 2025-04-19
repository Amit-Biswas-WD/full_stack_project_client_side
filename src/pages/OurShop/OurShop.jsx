import Cover from "../Shared/Cover/Cover";
import coverImg from "../../../public/ourShop/banner2.jpg";
import FilterCategory from "../Shared/FilterCategory/FilterCategory";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodCard from "../../components/Food/FoodCard";
import OrderShop from "./OrderShop/OrderShop";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [popularMenu, pizzaMenu, saladMenu, dessertMenu, soupMenu] =
    FilterCategory();

  return (
    <div>
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
            <Tab>Salad</Tab>
            <Tab>Popular</Tab>
            <Tab>Dessert</Tab>
            <Tab>Pizza</Tab>
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
