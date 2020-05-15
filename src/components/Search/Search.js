import React from "react";
import upperCaseName from "../../utils/upperCaseName";

export default function Search({ query, onChange, onSubmit, breeds }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label forhtml="breeds">Select Breed</label>

        <select id="breeds" onChange={onChange}>
          {breeds?.map((breed, index) => (
            <option value={breed} key={index}>
              {upperCaseName(breed)}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
