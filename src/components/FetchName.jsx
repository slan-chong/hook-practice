import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "../Pages/Search";
import axios from "axios";

const FetchName = () => {
  const URL = "https://jsonplaceholder.typicode.com/comments";
  const { setNameList } = useContext(ListContext);
  const [user, setUser] = useState([]);
  const nameMapHandler = (rawData) => {
    let temp = [];
    rawData.map((data) => temp.push(data.name));
    setUser(temp);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(URL).then((res) => {
        nameMapHandler(res.data);
      });
    };
    fetchData();
  }, []);
  useEffect(() => {
    setNameList(user);
  }, [user, setNameList]);
  return <></>;
};
export default FetchName;
