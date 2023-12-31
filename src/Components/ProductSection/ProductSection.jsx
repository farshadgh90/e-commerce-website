import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-green-300 p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-red-700 text-center text-lg font-inter font-bold">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:w-full sm:w-[75%] justify-items-center p-8 gap-4 mx-auto max-w-7xl">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                text={product.text}
                price={product.price}
                img={product.img}
                color={product.color}
                size={product.size}
                totalPrice={product.totalPrice}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
