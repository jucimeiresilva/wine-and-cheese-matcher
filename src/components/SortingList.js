import React from "react";
import './SortingList.css'

const SortingList = ({ list, children, onFilter, filter, wines }) => {

  return (
    <div className="sorting-list-container">
     {(children !== "Rating") && 
      <div key="all">
        <input
          className="me-1"
          type="radio"
          value="all"
          name={children}
          id="all"
          defaultChecked
          onClick={(e) => {
            onFilter("")
            filter(wines)
          }}
        />
        <label htmlFor="all">All</label>
      </div> 
      }
      {list.length &&
        list.map((element, i) => {
          return (
            <div key={element}>
              <input
                className="me-1"
                type="radio"
                value={element}
                name={children}
                id={`element ${i}`}
                onClick={(e) => {
                  onFilter(e.target.value);
                }}
              />
              <label htmlFor={element}>{element}</label>
            </div>
          );
        })}
    </div>
  );
};

export default SortingList;
