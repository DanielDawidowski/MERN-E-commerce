import React, { useState, useEffect } from "react";
import { getCategories } from "./ApiCore";
import Card from "./Card";

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleChange = () => {
    //
  };

  const searchSubmit = () => [
    //
  ];

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span className="input-group-text">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <select className="btn mr-2" onChange={handleChange("category")}>
              <option value="All">Pick Category</option>
              {categories.map((category, i) => (
                <option key={i} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            onChange={handleChange("search")}
          />
        </div>
        <div className="btn input-group-append" style={{ border: "none" }}>
          <button className="input-group-text">Search</button>
        </div>
      </span>
    </form>
  );

  return (
    <div>
      <div className="container">{searchForm()}</div>
    </div>
  );
};

export default Search;
