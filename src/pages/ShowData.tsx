import React from "react";

import DownloadData from '../components/fShowMeta/DownloadData';
import PickedData from '../components/fShowMeta/PickedData';

const ShowData = () => {
  return (
    <div>
      <h1>Explore Data</h1>
      <DownloadData />
      <PickedData />
    </div>
  );
};

export default ShowData;

