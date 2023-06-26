import React, { useEffect, useState } from "react";
import axios from "axios";
import Div from "./Div";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "d0d70e714dmshb7d89b29b48ed04p1948c2jsnf2ca509c038c",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

let a = [];

const Coins = () => {
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.request(options);

      const allIndex = res.data.data.coins.map((val, ind) => ind);
      console.log(allIndex);

      a = allIndex.concat();

      setIcon(res.data.data.coins);
    }

    getData();
  }, []);

  return (
    <>
      {a.map((item, index) => (
        <Div
          icon={icon[index].iconUrl}
          name={icon[index].name}
          price={icon[index].price}
          symbol={icon[index].symbol}
          index={index}
        />
      ))}
    </>
  );
};

export default Coins;
