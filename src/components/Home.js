import React, { useEffect, useState } from "react";
import Card from "./list_view/Card";

export default function Home() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="box">
        {data &&
          setData &&
          true &&
          data.items?.map((item) => <Card product={item} />)}
      </div>
    </div>
  );
}
