import React from "react";

export default function Search({ value, onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
