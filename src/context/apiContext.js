import { createContext, useEffect, useState } from "react";
import { myAxios } from "./myAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]);

  function getData(endpoint) {
    myAxios
      .get(endpoint)
      .then(function (response) {
        console.log("Get succesful: ", response.data);
        setDataList(response.data);
      })
      .catch(function (error) {
        console.log("Get error:", error);
      })
      .finally(function () {});
  }

  function postData(endpoint, payload) {
    myAxios
      .post(endpoint, payload)
      .then(function (response) {
        console.log("Post succesful: ", response.data);
      })
      .catch(function (error) {
        console.log("Post error:", error);
      });
  }

  function updateData(endpoint, payload) {
    myAxios
      .put(endpoint, payload)
      .then(function (response) {
        console.log("Update successful:", response.data);
      })
      .catch(function (error) {
        console.error("Update error:", error);
      });
  }

  function deleteData(endpoint) {
    myAxios
      .delete(endpoint)
      .then(function (response) {
        console.log("Delete successful:", response.data);
      })
      .catch(function (error) {
        console.error("Delete error:", error);
      });
  }

  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);

  return (
    <ApiContext.Provider
      value={{ dataList, getData, postData, updateData, deleteData }}
    >
      {children}
    </ApiContext.Provider>
  );
};
