import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { CreateContainer } from "./components";
import { MainContainer } from "./components";
import { actionType } from "./context/reducer";
import { useStateValue } from "./context/StateProvide";
import { getAllFoodItems } from "./utils/FirebaseFunctions";
const App = () => {
  const [, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) =>
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    );
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className=" mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
