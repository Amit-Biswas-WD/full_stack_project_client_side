const FoodCard = ({ items }) => {
  const { image, name, recipe } = items;

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-lg shadow-lg">
        <img src={image} alt={name} className="w-full h-80 object-cover" />
        <div className="my-6">
          <h2 className="text-2xl font-semibold mt-2 text-center">{name}</h2>
          <p className="text-base text-[#737373] my-1 px-6">
            {recipe.length > 75 ? recipe.slice(0, 75) + "...." : recipe}
          </p>
        </div>
        <div className="flex justify-center">
          <button className="uppercase btn mb-4">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
