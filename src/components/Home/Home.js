import React, { useEffect, useState } from "react";
import "./Home.css";
import SingleUser from "./singleUser";
import navLogo from "./../../assets/logo.png";
import NotFound from "../NotFound";
import Loading from "../Loading";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const response = await axios.get("https://randomuser.me/api/?results=15");
      setUsers(response.data.results);
      setLoading(false);
    };

    loadUsers();
  }, []);

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };


  return (
    <div className="container-fluid">
      <nav className="navbar   navbar-light bg-light shadow-sm mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className=""
              src={navLogo}
              alt="nav-logo"
              style={{ height: "40px" }}
            />
          </a>

          <div>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </nav>
      <div className="users-container container">
        {loading && <Loading />}
        {(!loading &&
          users
            .filter((user) => {
              if (searchName === "") {
                return user;
              } else if (
                user.name.first.toLowerCase().includes(searchName.toLowerCase())
              ) {
                return user;
              }
            }).length) ? users
            .filter((user) => {
              if (searchName === "") {
                return user;
              } else if (
                user.name.first.toLowerCase().includes(searchName.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user, index) => {
              return <SingleUser key={index} user={user} />;
            }) : !loading && <NotFound/>}
      </div>
    </div>
  );
};

export default Home;
