import React from "react";
import FetchData from "./FetchData";

export default function Home() {
  return (
    <div className="container">
      <FetchData productView={true} />
    </div>
  );
}
