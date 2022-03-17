import React from "react";
import loading from "./../assets/loading.png";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="custom-loading">
      <img
        src={loading}
        className="rounded"
        alt="..."
        style={{ width: "300px", margin: "auto" }}
      />
      <div className="d-block mt-3 mx-auto">
        <h5 className="text-center font-bold">Loading....</h5>
      </div>
    </div>
  );
};

export default Loading;
