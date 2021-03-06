import React, { useState } from "react";
import SortingList from "./SortingList";
import './SortingButton.css'

const SortingButton = ({ children, list, onFilter, filter, wines }) => {
  const [open, setOpen] = useState(false);

  const openButton = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="accordion mt-1 mb-1" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed subtitle sorting-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={() => openButton()}
            >
              {children}
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${open && "show"} `}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <SortingList
                list={list}
                children={children}
                onFilter={onFilter}
                filter={filter}
                wines={wines}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingButton;
