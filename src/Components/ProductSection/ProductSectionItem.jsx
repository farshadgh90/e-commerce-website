import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  size,
  text,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div>
      <Card className="xl:w-96 lg:w-[20rem] relative">
        <Typography
          variant="h4"
          className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700"
        >
          SALE%
        </Typography>
        <CardHeader floated={false} className="xl:h-[26rem] lg:h-[22rem] md:h-[30rem]">
          <img src={img} alt={name} className="xl:h-[26rem] lg:h-[22rem] md:h-[30rem] w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="red" className="font-medium" textGradient>
              Size left: <span className="text-gray-500">{defaultSize}</span>
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Color:
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Button
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  img: img,
                  name: name,
                  size: defaultSize,
                  amount: 1,
                  text: text,
                  price: price,
                  color: defaultColor,
                  totalPrice: totalPrice,
                })
              )
            }
            size="lg"
            color="gray"
            variant="outlined"
            ripple={true}
          >
            add to cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
