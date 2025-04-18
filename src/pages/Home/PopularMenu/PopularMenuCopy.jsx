const PopularMenuCopy = ({ items }) => {

  return (
    <div className="text-black bg-white pb-20 container mx-auto px-3 mt-14">
      <div className="md:grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <div key={item._id || item.id} className="col-span-1 flex gap-6 mb-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-[60px] h-[60px] bg-[#D9D9D9] rounded-b-full rounded-r-full object-cover"
            />
            <div>
              <div className="flex justify-between items-center my-2">
                <h2 className="text-xl font-semibold text-[#151515] uppercase">
                  {item.name}{" "}
                  <span className="text-[#d3d3d3]">------------------</span>
                </h2>
                <p className="text-xl font-semibold text-[#151515] text-end">
                  ${item.price}
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

export default PopularMenuCopy;
