import { Link } from "react-router-dom";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";

const PopularMenuCopy = ({ items, goLink = "/" }) => {
  return (
    <div className="text-black bg-white pb-20 container mx-auto px-3 mt-14">
      <div className="md:grid md:grid-cols-2 gap-10">
        {items.slice(0, 8).map((item) => (
          <div key={item._id || item.id} className="col-span-1 flex gap-6 mb-6">
          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-[60px] h-[60px] bg-[#D9D9D9] rounded-b-full rounded-r-full object-cover"
          />
        
          {/* Content */}
          <div className="flex-1">
            {/* Name and Price Row */}
            <div className="flex justify-between items-center my-2 w-full">
              {/* Name with dashed line */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#151515] uppercase">
                  {item.name}
                </h2>
                <div className="h-[1px] bg-[#d3d3d3] w-full mt-1"></div>
              </div>
        
              {/* Price */}
              <p className="text-xl font-semibold text-[#151515] text-end min-w-[80px] ml-4">
                ${item.price}
              </p>
            </div>
        
            {/* Description */}
            <p className="text-[#737373] max-w-[550px]">{item.recipe}</p>
          </div>
        </div>
        
        ))}
      </div>
      <div className="text-center">
        <Link to={goLink}>
          <button className="my-6 btn border-b-2 border-l-0 border-r-0 border-t-0 bg-none border-white">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenuCopy;
