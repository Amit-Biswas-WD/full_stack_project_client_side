import Cover from "../Shared/Cover/Cover";
import coverImg from "../../../public/ourShop/banner2.jpg";
import FilterCategory from "../Shared/FilterCategory/FilterCategory";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodCard from "../../components/Food/FoodCard";

const OurShop = () => {
  const [popularMenu, pizzaMenu, saladMenu, dessertMenu, soupMenu] =
    FilterCategory();
  const [tabIndex, setTabIndex] = useState(0);

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
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 my-8">
              {saladMenu.map((items) => (
                <FoodCard key={items._id} items={items} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 my-8">
              {popularMenu.map((items) => (
                <FoodCard key={items._id} items={items} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 my-8">
              {dessertMenu.map((items) => (
                <FoodCard key={items._id} items={items} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 my-8">
              {pizzaMenu.map((items) => (
                <FoodCard key={items._id} items={items} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 my-8">
              {soupMenu.map((items) => (
                <FoodCard key={items._id} items={items} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
