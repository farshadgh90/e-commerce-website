import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch()

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody
              divider
              className="border-b-0 flex flex-col justify-center items-start"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.name}
                        />
                        <div className="flex flex-col items-start">
                          <h4 className="text-base font-inter font-bold pt-2">
                            {item.name}
                          </h4>
                        </div>
                        {/* <div className="max-w-xs">
                          <p className="text-xs font-inter pt-2">{item.text}</p>
                        </div> */}
                      </div>
                      <div>
                        <p className="text-sm font-inter pt-2">
                          Selected Size:
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p className="text-sm font-inter pt-2">
                          Selected Color:
                          <span
                            className="ml-2 rounded-full px-2"
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                        <p className="text-sm font-inter pt-2">
                          Amount:
                          <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="text-sm font-inter pt-2">
                          Single Item Price:
                          <span className="ml-2">{item.price}$</span>
                        </p>
                        <p className="text-sm font-inter pt-2">
                          Total Item Price:
                          <span className="ml-2">{item.totalPrice}$</span>
                        </p>
                        <div className="pt-4">
                          <Button
                            size="sm"
                            color="red"
                            ripple={true}
                            variant="filled"
                            onClick={() => dispatch(removeFromCart(item))}
                          >
                            Remove Item
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center border-t border-gray-300">
              <p className="text-base font-inter pt-2">
                Total Price of All Products:
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </div>
      ) : (
        <div>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider className="border-b-0">
              <div>
                <h1 className="text-3xl font-inter font-bold py-4">
                  Your bag is empty
                </h1>
                <p className="text-base font-inter">Add some products</p>
              </div>
            </DialogBody>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default Cart;
