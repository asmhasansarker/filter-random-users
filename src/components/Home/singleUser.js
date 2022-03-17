import React from "react";

const SingleUser = ({ user }) => {
  const {
    name: { title, first, last },
    dob: { age },
    email,
    location: { street,postcode },
    picture: { medium },
    nat,
    
  } = user;
  return (
    <div className="user row d-flex justify-content-between">
      <div className="col-11 row">
        <div className="col-2">
          <img src={medium} className="rounded-circle" alt="user-img" />
        </div>
        <div className="col-10 ">
          <div>
            <h6>{`${title} ${first} ${last} | ${age}`}</h6>
          </div>
          <div>
            <p className="fs-6 text-center">{email}</p>
          </div>
          <div className="fs-6">{`${street.number} ${street.name} ${postcode}`}</div>
        </div>
      </div>
      <div className="col-1 row mx-auto">
        <p className=" fs-6 fw-light ">{nat}</p>
      </div>
    </div>
  );
};

export default SingleUser;
