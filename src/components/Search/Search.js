import React from "react";
import { string, func, arrayOf } from "prop-types";
import upperCaseName from "../../utils/upperCaseName";

export default function Search({ query, onChange, breeds, randomBreed }) {
  return (
    <div>
      <form>
        <label forhtml="breeds">Select Breed</label>

        <select id="breeds" onChange={onChange}>
          {breeds?.map((breed, index) => (
            <option value={breed} key={index}>
              {upperCaseName(breed)}
            </option>
          ))}
        </select>
      </form>
      <button type="button" onClick={randomBreed}>
        Pick Random Breed
      </button>
    </div>
  );
}

Search.propTypes = {
  query: string.isRequired,
  onChange: func.isRequired,
  breeds: arrayOf(string).isRequired,
  randomBreed: func.isRequired,
};
