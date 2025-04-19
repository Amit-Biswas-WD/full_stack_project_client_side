import FoodCard from "../../../components/Food/FoodCard";

const OrderShop = ({ item }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 my-8">
      {item.map((items) => (
        <FoodCard key={items._id} items={items} />
      ))}
    </div>
  );
};

export default OrderShop;
