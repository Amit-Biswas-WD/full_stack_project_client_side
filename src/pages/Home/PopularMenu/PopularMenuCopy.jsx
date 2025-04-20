import { Link } from "react-router-dom";

const PopularMenuCopy = ({ items, title }) => {
  return (
    <div className="text-black bg-white pb-20 container mx-auto px-3 mt-14">
      <div className="md:grid md:grid-cols-2 gap-10">
        {items.slice(0, 8).map((item) => (
          <div key={item._id || item.id} className="col-span-1 flex gap-6 mb-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-[60px] h-[60px] bg-[#D9D9D9] rounded-b-full rounded-r-full object-cover"
            />

            <div className="flex-1">
              <div className="flex justify-between items-center my-2 w-full">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#151515] uppercase">
                    {item.name}
                  </h2>
                  <div className="h-[1px] bg-[#d3d3d3] w-full mt-1"></div>
                </div>

                <p className="text-xl font-semibold text-[#151515] text-end min-w-[80px] ml-4">
                  ${item.price}
                </p>
              </div>

              <p className="text-[#737373] max-w-[550px]">{item.recipe}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/shop/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 my-4 border-b-black text-black bg-gray-200 hover:bg-black hover:text-green-500">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenuCopy;
