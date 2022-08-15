import { motion } from "framer-motion";
import React from "react";
import { MdShoppingBasket } from "react-icons/md";
const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full  my-12  ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-340 h-auto bg-cardOverlay rounded-lg p-2  my-12 backdrop-blur-lg hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-9dd72.appspot.com/o/Images%2F1660530327109-c6.png?alt=media&token=e1cf1b75-bc98-493c-aa99-f1e09ee5332d"
            alt=""
            className="w-44 -mt-8 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md "
          >
            <MdShoppingBasket className="text-white " />
          </motion.div>
        </div>
        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Chocolate& Vanilla
          </p>
          <p className="mt-1 text-sm text-gray-500">45 Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold ">
              <span className="text-sm text-red-500">$</span>5.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
