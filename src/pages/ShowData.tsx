import React from "react";
import DownloadData from '../components/fShowMeta/DownloadData';
import PickedData from '../components/fShowMeta/PickedData';

const ShowData = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-4">Explore Data</h1>
      <div className="flex flex-col items-center space-y-4 w-full">
        <DownloadData className="w-11/12 h-3/4 md:w-9/10 lg:w-9/10" />
        <PickedData className="w-4/5 h-1/6 md:w-3/4 lg:w-3/5" />
      </div>
    </div>
  );
};

export default ShowData;


