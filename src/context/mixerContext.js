import { createContext, use, useContext, useEffect, useState } from "react";
import { ApiContext } from "./apiContext";
import { CartContext } from "./cartContext";

export const MixerContext = createContext("");

export const MixerProvider = ({ children }) => {
  const { getData } = useContext(ApiContext);
  const [baseList, setBaseList] = useState([]);
  const [milkList, setMilkList] = useState([]);
  const [syrupList, setSyrupList] = useState([]);
  const [toppingList, setToppingList] = useState([]);
  const [ice, setIce] = useState(true);
  const [addedIngredientList, setAddedIngredientList]=useState([20013,20068,20055,20056]);
  const [mixerTotal, setMixerTotal]=useState(0);
 
  




  useEffect(() => {
    getData(`/api/by-category?category=BAS`, setBaseList);
    getData(`/api/by-category?category=MIL`, setMilkList);
    getData(`/api/by-category?category=SYR`, setSyrupList);
    getData(`/api/by-category?category=TOP`, setToppingList);
  },[]);
  useEffect(() => {
    console.log("baselist updated:", baseList);
  }, [baseList]); 
  return (
    <MixerContext.Provider
      value={{ baseList, milkList, syrupList, toppingList, ice, setIce, addedIngredientList, setAddedIngredientList, mixerTotal, setMixerTotal }}
    >
      {children}
    </MixerContext.Provider>
  );
};
