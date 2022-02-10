import React, { useState } from "react";

const SortingList = ({ list, children, onFilter, filter, wines }) => {
  const [check, setCheck] = useState(false);
  return (
    <>
      <div key="all">
        <input
          className="me-1"
          type="radio"
          value="all"
          name={children}
          id="all"
          onClick={(e) => {
            setCheck(!check);
            filter(wines)
            console.log(e);
          }}
        />
        <label htmlFor="all">All</label>
      </div>
      {list.length &&
        list.map((element, i) => {
          return (
            <div key={element}>
              <input
                className="me-1"
                type="radio"
                value={element}
                name={children}
                {...(check ? "checked" : null)}
                id={`element ${i}`}
                onClick={(e) => {
                  setCheck(!check);
                  onFilter(e.target.value);
                  console.log(e);
                }}
              />
              <label htmlFor={element}>{element}</label>
            </div>
          );
        })}
    </>
  );
};

export default SortingList;
