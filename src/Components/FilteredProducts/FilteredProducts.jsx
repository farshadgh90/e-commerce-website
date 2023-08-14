import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Error from "../Error/Error";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  filteredProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productsSlice";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "blue",
    "black",
    "yellow",
    "brown",
    "orange",
    "purple",
    "green",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div>
      <div className="pt-16 px-10">
        <div className="pl-14">
          <h1 className="text-4xl text-gray-600 font-inter font-bold tracking leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8">
            <div className="flex flex-wrap items-center">
              {genderButtons.map((item, index) => {
                return (
                  <div key={index} className="my-1">
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="text-black font-medium hover:bg-gray-300 duration-300 ease-in-out mr-4"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black font-medium hover:bg-gray-300 duration-300 ease-in-out mr-4 my-1"
                onClick={() => dispatch(sortByPrice())}
              >
                high price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black font-medium hover:bg-gray-300 duration-300 ease-in-out mr-4 my-1"
                  >
                    select a color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags" || type === "Shoes"}
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black font-medium hover:bg-gray-300 duration-300 ease-in-out mr-4 my-1"
                  >
                    select a size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="pr-14 flex self-start">
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black font-medium hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(filteredProducts(type))}
              >
                clear filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center py-8 gap-x-4 gap-y-14">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
