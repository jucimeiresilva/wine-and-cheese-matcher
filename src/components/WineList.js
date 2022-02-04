import React from 'react';
import SortingButton from './SortingButton';
import WineCard from './WineCard';

const WineList = () => {
  return (
    <>
      <h1>Wine List</h1>
      <SortingButton />
      <WineCard />
    </>
  );
};

export default WineList;
