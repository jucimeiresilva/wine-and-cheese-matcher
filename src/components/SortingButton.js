import React from 'react';


const SortingButton = ({ children }) => {
  return (
    <>
      <button style= {{marginBottom:"8px"}}>sort by { children }</button>
    </>
  );
};

export default SortingButton;
