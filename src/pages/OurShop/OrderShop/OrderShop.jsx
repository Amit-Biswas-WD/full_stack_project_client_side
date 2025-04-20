import FoodCard from "../../../components/Food/FoodCard";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const OrderShop = ({ item }) => {
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = item.slice(startIndex, endIndex);
  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 my-8">
        {currentItems.map((items) => (
          <FoodCard key={items._id} items={items} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(item.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
};

export default OrderShop;
