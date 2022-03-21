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
        {data &&
          setData &&
          true &&
          data.items?.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-content">
                <h6>
                  <b>{item.name}</b>
                </h6>
              </div>

              <div className="card-image">
                <img
                  src="https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="item"
                />
              </div>

              <div className="card-content">
                <span className="btn-small btn-floating right green">
                  <i className="material-icons">add</i>
                </span>
              </div>

              <div className="card-content">
                <span>
                  <p>{item.brand}</p>
                  <p>
                    <b>Price: {item.price} SEK</b>
                  </p>
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
