import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useStateValue } from "../context/StateProvide";
import HomeContainer from "./HomeContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const rowContainerRef = useRef();

  const scroll = (scrolloffset) => {
    // console.log(sc);
    rowContainerRef.current.scrollLeft += scrolloffset;
  };
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold capitalize  text-headingColor relative 
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:left-0 before:-bottom-2 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100"
          >
            Our Fresh & healthy Fruits
          </p>
          <div className="hidden md:flex gap-3 items-center ">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft
                className="text-lg text-white"
                onClick={() => scroll(-400)}
              />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight
                className="text-lg text-white"
                onClick={() => scroll(400)}
              />
            </motion.div>
          </div>
        </div>
        <RowContainer
          ref={rowContainerRef}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer />
      <CartContainer />
    </div>
  );
};

export default MainContainer;
