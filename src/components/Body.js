import { useState } from "react";
import itemsList from "../mocks/itemList.json";
import ProductCard from "./ProductCard";

const Body = () => {
  const [list, setList] = useState(itemsList);

  const filterTopRatedProducts = () => {
    setList(list.filter((item) => item.rating >= 4));
  };

  return (
    <div className="body-container">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRatedProducts}>
          Top Rated Products
        </button>
      </div>
      <div className="card-container">
        {list
          ?.filter((item) => item?.quantityInStock)
          ?.map((item) => (
            <ProductCard key={item?.id} productData={item} />
          ))}
      </div>
    </div>
  );
};

export default Body;
