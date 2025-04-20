// import { useEffect, useState } from "react";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularMenu = data.filter((item) => item.category === "popular");
  //       setMenu(popularMenu);
  //     });
  // }, []);

  return (
    <div className="text-black pb-20 container mx-auto px-3">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="md:grid md:grid-cols-2 gap-10">
        {popularMenu.map((item, index) => (
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
        <button className="btn btn-outline border-0 border-b-4 my-4 border-b-black text-black bg-gray-200 hover:bg-black hover:text-green-500">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
