import React from "react";

export default function Search({ query, onChange, onSubmit, breeds }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label for="breeds">Select Breed</label>

        <select id="breeds" onChange={onChange}>
          {breeds?.map((breed, index) => (
            <option value={breed} key={index}>
              {breed[0].toUpperCase() + breed.slice(1)}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
