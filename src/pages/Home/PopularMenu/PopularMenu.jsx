import { useEffect, useState } from "react";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);
  return (
    <div className="text-black pb-20 container mx-auto px-3">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="md:grid md:grid-cols-2 gap-10">
        {menu.map((item, index) => (
          <div key={index} className="col-span-1 flex gap-6">
            <img
              src={item.image}
              alt=""
              className="w-[60px] h-[60px] bg-[#D9D9D9] rounded-b-full rounded-r-full"
            />
            <div className="">
              <div className="flex justify-between items-center my-2">
                <h2 className="text-xl font-semibold text-[#151515] uppercase text-start">
                  {item.name}{" "}
                  <span className="text-[#d3d3d3]">------------------</span>
                </h2>
                <p className="text-xl font-semibold text-[#151515] text-end">
                  {item.price}
                </p>
              </div>

              <p className="text-[#737373] max-w-[550px]">{item.recipe}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="my-6 btn border-b-2 border-l-0 border-r-0 border-t-0 bg-none border-white">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
