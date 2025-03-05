import { createContext, useContext, useEffect, useState } from "react";
import { ApiContext } from "./apiContext";

export const MixerContext = createContext("");

export const MixerProvider = ({ children }) => {
  const { getData } = useContext(ApiContext);
  const [baseList, setBaseList] = useState([]);
  const [milkList, setMilkList] = useState([]);
  const [syrupList, setSyrupList] = useState([]);
  const [toppingList, setToppingList] = useState([]);
  const [ice, setIce] = useState(false);
  



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
      value={{ baseList, milkList, syrupList, toppingList, ice }}
    >
      {children}
    </MixerContext.Provider>
  );
};
