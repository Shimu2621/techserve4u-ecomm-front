import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="search_wrapper">
      <div className="input_wrapper">
        {/* <Image height={20} width={20} src={'/svgs/search_icon.svg'} alt="search-icon" /> */}
        <i className="search_icon">
          <CiSearch size={25} />
        </i>
        <input placeholder="search for..."></input>
      </div>
    </div>
  );
};

export default Search;
