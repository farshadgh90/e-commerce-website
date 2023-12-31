import React from "react";
import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-tailwind/react";
import { logout } from "../../features/slices/authSlice";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false)
    );
  }, []);

  const user = useSelector((state) => state.user.user);
  const { name, image } = user;

  const handleOpen = () => setOpen(true);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-blue-gray-700 p-2 w-full">
        <h3 className="text-white font-inter text-2xl font-bold tracking-normal leading-none text-center">
          Welcome All
        </h3>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <img className="w-full h-28" src={logo} alt="store" />
        </div>
        <div
          className="absolute right-5 h-6 w-6 text-inherit z-20 hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
        <div
          className={
            openNav
              ? "absolute top-0 w-full transition-h duration-300 h-screen opacity-95 flex flex-col-reverse justify-center items-center bg-blue-gray-50 gap-10 z-10"
              : "transition-h duration-300 h-0 md:flex md:flex-row md:items-center md:gap-2 md:pr-5"
          }
        >
          <div className={!openNav && "hidden md:block"}>
            <button
              onClick={() => dispatch(logout())}
              className="font-inter text-base font-medium tracking-normal leading-none text-center"
            >
              Logout
            </button>
          </div>
          <div
            className={
              openNav
                ? "flex flex-row items-center gap-1 cursor-pointer"
                : "hidden md:flex md:flex-row md:items-center md:cursor-pointer md:gap-[1px]"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center">
              Wish List
            </p>
          </div>
          <div
            onClick={handleOpen}
            className={
              openNav
                ? "flex flex-row items-center gap-1 cursor-pointer"
                : "hidden md:flex md:flex-row md:items-center md:cursor-pointer md:gap-[1px]"
            }
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center">
              Shopping Bag
            </p>
            <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
          </div>
          <div
            className={
              openNav
                ? "flex flex-row items-center gap-1"
                : "hidden md:flex md:flex-row md:items-center md:gap-[1px]"
            }
          >
            {image && <Avatar src={image} alt="avatar" size="sm" />}
            <p className="font-inter text-sm font-medium">
              Hi {name.charAt("0").toUpperCase() + name.slice(1)}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-gray-700 p-4 w-full flex justify-around">
        <div className="text-white font-inter text-sm font-normal sm:text-base sm:font-medium tracking-normal leading-none text-center ml-0.5">
          50% OFF
        </div>
        <div className="text-white font-inter text-sm font-normal sm:text-base sm:font-medium tracking-normal leading-none text-center ml-0.5">
          Free Shipping and Returns
        </div>
        <div className="text-white font-inter text-sm font-normal sm:text-base sm:font-medium tracking-normal leading-none text-center ml-0.5">
          Different Payment Methods
        </div>
      </div>
    </div>
  );
};

export default Navbar;
