import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import NotFound from "../assests/NotFound.svg";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvide";
const RowContainer = React.forwardRef(({ data, flag }, ref) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const [item, setItem] = useState([]);
  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: item,
    });
    localStorage.setItem("cartItems", JSON.stringify(item));
  };

  useEffect(() => {
    addToCart();
    // eslint-disable-next-line
  }, [item]);
  return (
    <div
      ref={ref}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-275 h-auto min-w-[275px]  md:min-w-[300] md:w-300  bg-cardOverlay rounded-lg p-2  my-2 md:my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt=""
                className="w-40 h-40  object-contain -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md "
                onClick={() => setItem([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white " />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold ">
                  <span className="text-sm px-3 text-red-500">$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full  flex-col flex items-center justify-center">
          <img className="h-340" src={NotFound} alt="row" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>{" "}
        </div>
      )}
    </div>
  );
});

export default RowContainer;
