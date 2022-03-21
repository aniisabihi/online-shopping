import React, { useEffect, useState } from "react";

function Home() {
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

  // noinspection JSUnresolvedVariable
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">
        {setData &&
          setData.length > 0 &&
          data.items.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <b>
                  {" "}
                  <span className="card-content">{item.brand}</span>
                </b>
                <span className="btn-floating halfway-fab waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </span>
              </div>

              <div className="card-content">
                <p>{item.name}</p>
                <p>
                  <b>Price: {item.price} SEK</b>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
