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
  const [iceData, setIceData]=useState({});
  const [ice, setIce] = useState(true);
  const [addedIngredientList, setAddedIngredientList]=useState([20013,20068,20055,20056]);
  const [mixerTotal, setMixerTotal]=useState(0);
   const [readyTodAdd, setReadyToAdd] = useState(false);
 
  




  useEffect(() => {
    getData(`/api/by-category?category=BAS`, setBaseList);
    getData(`/api/by-category?category=MIL`, setMilkList);
    getData(`/api/by-category?category=SYR`, setSyrupList);
    getData(`/api/by-category?category=TOP`, setToppingList);
    getData(`/api/by-category?category=ICE`, setIceData)
  },[]);
  useEffect(() => {
    console.log("baselist updated:", baseList);
  }, [baseList]); 

  function iceAddToCup() {
    let list = [...addedIngredientList];
    console.log(JSON.stringify(iceData));
    list=list.slice(0,4)
  
    if (ice&&iceData) {
      list[4]=iceData[0]
    }
    setAddedIngredientList(list);
    setReadyToAdd(true)
    }
  
    
  
  
  return (
    <MixerContext.Provider
      value={{ baseList, milkList, syrupList, toppingList, ice, setIce, addedIngredientList, setAddedIngredientList, mixerTotal, setMixerTotal, iceAddToCup, readyTodAdd, setReadyToAdd }}
    >
      {children}
    </MixerContext.Provider>
  );
};
