// noinspection JSUnresolvedVariable

import { useEffect, useState } from "react";
import ProductData from "./list_view/ProductData";

const FetchData = ({ productView }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myJson) => {
        setIsLoading(false);
        setData(myJson);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data && <ProductData product={data} isProductChosen={productView} />}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
};
export default FetchData;
