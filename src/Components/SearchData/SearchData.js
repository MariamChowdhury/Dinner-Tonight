import Axios from "axios";
import { useState } from "react";
import SearchPage from "../SearchPage/SearchPage";
import "./SearchData.css";

const SearchData = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.edamam.com/search?q=${query}&app_id=95ccbbe2&app_key=04dd64b9e0c5870a4fbcc006a5f2ff74`;
  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    setQuery("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row my-5">
          <div className="col d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search for food...."
              required
              value={query}
              onChange={onChange}
            />
            <input className="mx-2" type="submit" value="submit" />
          </div>
        </div>
      </form>
      <div className="row">
        {recipes.map((recipe) => (
          <SearchPage recipe={recipe}></SearchPage>
        ))}
      </div>
    </div>
  );
};

export default SearchData;
