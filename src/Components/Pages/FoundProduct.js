import React, { useContext } from "react";
import { Category } from "../../CategoryContext/CategoryContext";
import ProductCard from "../NewArraivale/ProductCard";

const FoundProduct = () => {
  const { storeProduct } = useContext(Category);
  console.log(storeProduct);
  
  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2  container mx-auto my-20">
        {storeProduct.map((woManProducts) => (
          <ProductCard
            key={woManProducts._id}
            Products={woManProducts}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default FoundProduct;
