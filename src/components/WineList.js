import React from 'react';
import SortingButton from './SortingButton';
import WineCard from './WineCard';

const WineList = () => {
  return (
    <>
      <h1>Wine List</h1>
      <SortingButton>Rating</SortingButton>
      <SortingButton>Type</SortingButton>
      <SortingButton>Country</SortingButton>
      <WineCard />
    </>
  );
};

export default WineList;
