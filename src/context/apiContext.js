import { createContext, useEffect, useState } from "react";
import { MyAxios } from "./myAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [postedList, setPostedList]=useState([]);

  function getData(endpoint, setlist) {
    MyAxios
      .get(endpoint)
      .then(function (response) {
        console.log("Get succesful: ", response.data);
        setlist(response.data);
      })
      .catch(function (error) {
        console.log("Get error:", error);
      })
      .finally(function () {});
  }

  function postData(endpoint, payload, setlist) {
    MyAxios
      .post(endpoint, payload)
      .then(function (response) {
        console.log("Post succesful: ", response.data);
        setlist(response.data)
        return response.data
      })
      .catch(function (error) {
        console.log("Post error:", error.response?.data || error.message);
        return null
      });
  }

  function updateData(endpoint, payload) {
    MyAxios
      .patch(endpoint, payload)
      .then(function (response) {
        console.log("Update successful:", response.data);
      })
      .catch(function (error) {
        console.error("Update error:", error);
      });
  }

  function deleteData(endpoint) {
    MyAxios
      .delete(endpoint)
      .then(function (response) {
        console.log("Delete successful:", response.data);
      })
      .catch(function (error) {
        console.error("Delete error:", error);
      });
  }

  useEffect(() => {
    getData('/api/by-type?type=F', setProductList);
  }, []);



  return (
    <ApiContext.Provider
      value={{ dataList,productList, setProductList, getData, postData, updateData, deleteData, postedList }}
    >
      {children}
    </ApiContext.Provider>
  );
};
