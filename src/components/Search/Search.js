import React from "react";

export default function Search({ query, onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" query={query} onChange={onChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
